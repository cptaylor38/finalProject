import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Navbar from "../../components/Nav/navbar";
import './homeStyle.css';
import SearchCard from '../../components/searchCard/searchCard';
import TrackItems from '../../components/spotify/Spotify';
import ModalObject from '../../components/Modal/Modal';
import { Modal } from 'antd';
import Iframe from 'react-iframe';

const Home = props => {

    const [zipInput, setZipInput] = useState('');
    const [zipValue, setZipValue] = useState({
        zipcode: '',
        city: '',
        state: ''
    });
    const [tracks, setTracks] = useState([]);
    const [modalView, setmodalView] = useState(false);
    const [modalURL, setmodalURL] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setZipValue(zipInput);
        setTracks([]);
        const data = zipInput;
        API.getZip(data)
            .then(res => {
                let city = res.data.places[0]['place name'];
                let state = res.data.places[0]['state'];
                setZipValue({ city: city, state: state, zipcode: zipInput });
                gettracks(city);
            })
            .catch(err => console.log(err));
        setZipInput('');
    }

    const gettracks = (city) => {
        API.getTracksData(city)
            .then(res => {
                console.log(res.data);
                setTracks(res.data)
            })
            .catch(err => console.log(err));
    }

    const validateSearch = () => {
        if (zipValue.zipcode && zipValue.city && zipValue.state)
            return <SearchCard zipcode={zipValue.zipcode} city={zipValue.city} state={zipValue.state} />
    }

    const showModal = (url) => {
        console.log('new url' + url);
        setmodalView(true);
        setmodalURL(url);
    };


    const handleOk = e => {
        console.log(e);
        setmodalView(true);
    };

    const handleCancel = e => {
        console.log(e);
        setmodalView(true);
    };

    return (
        <div>
            <Navbar />
            <div className='jumbotron-fluid searchCriteria'>
                <div className='col zipCol'>
                    <form onSubmit={handleSubmit} style={{ paddingTop: '20px' }}>
                        <input type='text' name='zipText' id='zipText' value={zipInput} placeholder='Zipcode' onChange={e => setZipInput(e.target.value)}></input>
                        <button>Search</button>
                    </form>
                </div>
                <div className='col resultsCol'>
                    {validateSearch()}
                </div>
            </div>
            <div className='container-fluid pageContainer'>
                {tracks && tracks.length !== 0 ? tracks.filter(item => item != null).map(item => <TrackItems key={item.id} data={item} showModal={showModal} />) : ''}
                <Modal
                    title="Basic Modal"
                    visible={modalView}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    url={modalURL}
                    okButtonProps={{ disabled: true }}
                    cancelButtonProps={{ disabled: true }}
                >
                    <Iframe url={modalURL}
                        width="60vw"
                        height="60vh"
                        id="myId"
                        className="myClassname"
                        display="initial"
                        position="relative" />
                </Modal>

            </ div>
        </div>
    )
}

export default Home;