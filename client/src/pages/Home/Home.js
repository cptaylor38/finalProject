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
    const [newEntry, setNewEntry] = useState(false);
    const [entries, setEntries] = useState([]);
    const [journalState, setJournalState] = useState(false);
    const [archivesState, setArchivesState] = useState(true);

    const retrieveProfile = () => {
        const user = currentUser.uid;
        API.getProfile(user)
            .then(res => {
                setUserData(res.data.username);
                setUserId(res.data._id);
                setNewEntry(false);
                setEntries(res.data.entries);
                console.log('getProfile on home.js ran')
            })
            .catch(err => console.log(err));
    }

    useEffect(retrieveProfile, []);
    useEffect(retrieveProfile, [newEntry]);

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
                setTracks(res.data)
            })
            .catch(err => console.log(err));
    }

    const journalClick = () => {
        setJournalState(true);
        setArchivesState(false);
    }

    const archivesClick = () => {
        setJournalState(false);
        setArchivesState(true);
    }

    return (

        
        <div>
            <Navbar onClick={signOut} user={userName} />
            <div className='container-fluid pageContainer'>
                <div className='row'>

                    <div className='searchCol'>

                    <div className="title">
                        <img src="http://i63.tinypic.com/117hi0p.png" width="18" height="18" />
                            <h1 className="title">Windows 95</h1>
                                    <button>X</button>
                                    <button>?</button>
                        <div className='container searchCriteria'>
                    <form onSubmit={handleSubmit} style={{ paddingTop: '20px' }}>
                                <input type='text' name='moodText' id='moodText' value={moodInput} placeholder='Mood' onChange={e => setMoodInput(e.target.value)}></input>
                                <button>Search</button>
                            </form>
                            <div className='resultsContainer'>
                                {tracks && tracks.length !== 0 ? tracks.filter((item) => item != null).map(item => <TrackItems key={item.id} data={item} />) : ''}
                           
                 
                    
                    <div className='searchCol'>
                    <div className="title">
                        <img src="http://i63.tinypic.com/117hi0p.png" width="18" height="18" />
                            <h1 className="title">Windows 95</h1>
                                    <button>X</button>
                                    <button>?</button>
                        <div className='container journalEntries'>
         <h2><button type='button' onClick={() => archivesClick()}>Archives</button><button type='button' onClick={() => journalClick()}>Journal</button></h2>
                            {journalState && !archivesState ? <Journal userId={userId} setNewEntry={setNewEntry} setJournalState={setJournalState} /> : <Archives userId={userId} entries={entries} retrieveProfile={retrieveProfile} />}
                        </div>

                            
                        

                    </div>
                </div>
            </div>
            </div>
            </ div>
                        </div>
                    </div>
      
    )
}

export default Home;