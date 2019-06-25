import React, { useState, useEffect, useContext } from 'react';
import API from "../../utils/API";
import Navbar from "../../components/Nav/navbar";
import './homeStyle.css';
import TrackItems from '../../components/trackItem/TrackItem';
import App from '../../utils/firebase';
import { AuthContext } from "../../utils/Auth";
import Journal from '../../components/homeJournal/Journal';
import Archives from '../../components/homeArchives/Archives';

const Home = props => {

    const [userName, setUserData] = useState('')
    const [moodInput, setMoodInput] = useState('');
    const [tracks, setTracks] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const [userId, setUserId] = useState(null);

    const [journalState, setJournalState] = useState(false);

    const retrieveProfile = () => {
        const user = currentUser.uid;
        API.getProfile(user)
            .then(res => {
                console.log(res.data);
                setUserData(res.data.username);
                setUserId(res.data._id)
            })
            .catch(err => console.log(err));
    }

    useEffect(retrieveProfile, [currentUser])

    const handleSubmit = (event) => {
        event.preventDefault();
        setTracks([]);
        getTracks(moodInput);

    }

    const signOut = () => {
        App.auth().signOut()
    }

    const getTracks = (track) => {
        API.getTracksData(track)
            .then(res => {
                console.log(res.data);
                setTracks(res.data)
            })
            .catch(err => console.log(err));
    }

    const journalClick = () => {
        setJournalState(true);
    }

    const archivesClick = () => {
        setJournalState(false);
    }

    return (
        <div>
            <Navbar onClick={signOut} user={userName} />
            <div className='container-fluid pageContainer'>
                <div className='row'>
                    <div className='searchCol col-lg-5 col-md-5 col-sm-12'>
                        <div className='container searchCriteria'>
                            <form onSubmit={handleSubmit} style={{ paddingTop: '20px' }}>
                                <input type='text' name='moodText' id='moodText' value={moodInput} placeholder='Mood' onChange={e => setMoodInput(e.target.value)}></input>
                                <button>Search</button>
                            </form>
                            <div className='resultsContainer'>
                                {tracks && tracks.length !== 0 ? tracks.filter((item) => item != null).map(item => <TrackItems key={item.id} data={item} />) : ''}
                            </ div>
                        </div>
                    </div>
                    <div className='journalCol col-lg-5 col-md-5 col-sm-12'>
                        <div className='container journalEntries'>
                            <h2><button type='button' onClick={() => archivesClick()}>Archives</button><button type='button' onClick={() => journalClick()}>Journal</button></h2>
                            {journalState ? <Journal userId={userId} /> : <Archives userId={userId} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;