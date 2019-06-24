import React, { useState, useEffect, useContext } from 'react';
import API from "../../utils/API";
import Navbar from "../../components/Nav/navbar";
import './homeStyle.css';
import TrackItems from '../../components/trackItem/TrackItem';
import App from '../../utils/firebase';
import { AuthContext } from "../../utils/Auth";



const Home = props => {
    

    const [userName, setUserData] = useState('')
    const [moodInput, setMoodInput] = useState('');
    const [tracks, setTracks] = useState([]);
    const { currentUser } = useContext(AuthContext);

    const retrieveProfile = () => {
        const user = currentUser.uid;
        API.getProfile(user)
            .then(res => { console.log(res.data); setUserData(res.data.username) })
            .catch(err => console.log(err));
    }

    useEffect(retrieveProfile, [])

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

    return (

        
        <div>
            <Navbar onClick={signOut} />
            <h1>Welcome, {userName ? userName : ''}</h1>
            <div className='jumbotron-fluid searchCriteria'>
                <div className='col moodCol'>
                    <form onSubmit={handleSubmit} style={{ paddingTop: '20px' }}>
                        <input type='text' name='moodText' id='moodText' value={moodInput} placeholder='Mood' onChange={e => setMoodInput(e.target.value)}></input>
                        <button>Search</button>
                    </form>
                </div>
            </div>
            <div className='container-fluid pageContainer'>
                {tracks && tracks.length !== 0 ? tracks.filter((item) => item != null).map(item => <TrackItems key={item.id} data={item} />) : ''}
            </ div>
        </div>
    )
}

export default Home;