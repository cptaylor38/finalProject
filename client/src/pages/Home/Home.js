import React, { useState, useEffect } from 'react';
import API from "../../utils/API";
import Navbar from "../../components/Nav/navbar";
import './homeStyle.css';
import SearchCard from '../../components/searchCard/searchCard';
import ListItems from '../../components/craigslist/Craigslist';
import ModalObject from '../../components/Modal/Modal';
import { Modal } from 'antd';

const Home = props => {

    const [zipInput, setZipInput] = useState('');
    const [zipValue, setZipValue] = useState({
        zipcode: '',
        city: '',
        state: ''
    });
    const [listings, setListings] = useState([]);
    const [modalView, setmodalView] = useState(false);
    const [modalURL, setmodalURL] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setZipValue(zipInput);
        setListings([]);
        const data = zipInput;
        API.getZip(data)
            .then(res => {
                let city = res.data.places[0]['place name'];
                let state = res.data.places[0]['state'];
                setZipValue({ city: city, state: state, zipcode: zipInput });
                getListings(city);
            })
            .catch(err => console.log(err));
        setZipInput('');
    }

    const getListings = (city) => {
        API.getListingsData(city)
            .then(res => {
                console.log('getListingsData ran');
                setListings(res.data)
            })
            .catch(err => console.log(err));
    }

    const validateSearch = () => {
        if (zipValue.zipcode && zipValue.city && zipValue.state)
            return <SearchCard zipcode={zipValue.zipcode} city={zipValue.city} state={zipValue.state} />
    }

    const generateModal = (url) => {
        console.log('new url' + url);
        setmodalView(true);
        setmodalURL(url);
        return <Modal
            title="Basic Modal"
            visible={modalView}
            onOk={handleOk}
            onCancel={handleCancel}
            url={modalURL}
        >
            <something>something</something>
        </Modal>
    }

    const showModal = () => {
        setmodalView(true);
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
                {listings ? listings.map(item => <ListItems key={item.pid} data={item} generateModal={generateModal} />) : ''}
                <div className='modalHolder'></div>
            </ div>
        </div>
    )
}

export default Home;