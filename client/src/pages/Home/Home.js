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
            <Navbar onClick={signOut} user={userName} />        
           

            <img className="icon2" src="https://win98icons.alexmeub.com/icons/png/html-5.png"></img>
               


            <div className='container-fluid pageContainer'>
                <div className='row'>
                    <div className='searchCol'>

                    <div className="title">
                        <img src="https://win98icons.alexmeub.com/icons/png/cd_audio_cd_a-1.png" width="18" height="18" />
                            <h1 className="title">CD Player</h1>
                                    <button>X</button>
                                    <button>_</button>
                        <div className='container searchCriteria'>
                    <form onSubmit={handleSubmit} style={{ paddingTop: '20px' }}>
                                <input type='text' name='moodText' id='moodText' value={moodInput} placeholder='Mood' onChange={e => setMoodInput(e.target.value)}></input>
                                <button>Search</button>
                            </form>
                            <div className='resultsContainer'>
                                {tracks && tracks.length !== 0 ? tracks.filter((item) => item != null).map(item => <TrackItems key={item.id} data={item} />) : ''}
                                <iframe src="https://giphy.com/embed/Ptnv8pL8QwI3m" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a></a></p>

                                

                                <div className="footer">
                                
                                <button className="button-default"> <img src="http://i63.tinypic.com/117hi0p.png" width="23" height="23" />Start</button>
                            
                                <button className="button-default2" onClick={event => signOut(event)}>Sign Out </button>
                                        
                                </div>
                 
                    {/* </div>
                    <div className='searchCol'>
                    <div className="title">
                        <img src="http://i63.tinypic.com/117hi0p.png" width="18" height="18" />
                            <h1 className="title">Windows 95</h1>
                                    <button>X</button>
                                    <button>?</button>
                        <div className='container journalEntries'>
                            
                        </div> */}
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