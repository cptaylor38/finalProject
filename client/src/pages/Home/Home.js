import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './homeStyle.css';

const Home = props => {

    // const [background, setBackground] = useState({ display: `url('https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')` })
    const [zipInput, setZipInput] = useState({ zip: '27292' });
    const [zipData, setZipData] = useState({ zipdata: { city: '', state: '' } });

    // const fetchPhotos = async () => {
    //     const data = await fetch(`https://api.unsplash.com//photos/random/?client_id=0772e999bd6d26c4469b365947dba1798abd492be96f5cc0bc48d59d9e02cb17&query=house&count=1`)
    //     const photo = await data.json();
    //     let image = photo[0].urls.raw;
    //     console.log(photo[0].urls.raw);
    //     setBackground({ display: `url(${image})` });
    // }

    useEffect(() => { fetchZipInfo() }, []);
    // useEffect(() => { fetchPhotos() }, []);

    const fetchZipInfo = async () => {
        console.log('fetchZipInfo ran');
        const zipData = await fetch('http://api.zippopotam.us/us/27292');
        const zipInfo = await zipData.json();
        console.log(zipInfo);
        // setZipInput({ zipInput: 'zipcode goes here' });
        setZipData({ zipData: { city: zipInfo.places[0]['place name'], state: zipInfo.places[0]['state'] } });
        console.log(zipInfo.places[0]['place name']);
        console.log(zipInfo.places[0]['state']);
        console.log(zipData);
    }

    const backgroundStyle = {
        background: `url('https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }


    return (
        <div>
            <div className='container-fluid pageContainer' style={backgroundStyle}>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='container locationInfo'>
                        <h1>{zipData.city || 'City'}</h1>
                        <h2>{zipData.state || 'State'}</h2>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='container zipContainer'>
                        <h4>Zip code: </h4>
                        <textarea></textarea>
                        <button type='submit'>Search</button>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='container accountContainer'>
                        <p>Sign In</p>
                        <p>Create Account</p>
                    </div>
                </div>
            </ div>
        </div>
    )

}

export default Home;