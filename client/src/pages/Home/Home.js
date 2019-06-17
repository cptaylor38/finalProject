import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import Navbar from '../../components/Nav/navbar';
import './homeStyle.css';

const Home = props => {

    // const [background, setBackground] = useState({ display: `url('https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')` })
    const [zipInput, setZipInput] = useState('');
    const [zipValue, setZipValue] = useState('');
    // const [zipData, setZipData] = useState({ zipdata: { city: '', state: '' } });
    // useEffect(() => { getZipInfo() }, []);
    // const getZipInfo = () => {
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('reached');
        setZipValue(zipInput);
        const data = zipInput;
        console.log(data);
        API.getZip(data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        // <Link to={{ pathname: '/search/', state: { zipData: zipValue } }}></Link>
    }

    const handleInput = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setZipInput({
            [event.target.name]: event.target.value
        });
    }

    const backgroundStyle = {
        background: `url('https://images.unsplash.com/photo-1492889971304-ac16ab4a4a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div>
            {/* <Navbar /> */}
            <div className='container-fluid pageContainer' style={backgroundStyle}>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='container locationInfo'>
                        {/* <h1>{zipData.city || 'City'}</h1>
                        <h2>{zipData.state || 'State'}</h2> */}
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='container zipContainer'>
                        <h4>Zip code: </h4>
                        <p>{zipInput}</p>
                        <form onSubmit={handleSubmit}>
                            <input type='text' name='zipText' id='zipText' value={zipInput.zip} placeholder='Zipcode' onChange={e => setZipInput(e.target.value)}></input>
                            <button>Search</button>
                        </form>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-12'>
                    <div className='container accountContainer'>
                        <p>Let us help you find the right home. Enter the zipcode to get started.</p>
                    </div>
                </div>
            </ div>
        </div>
    )

}

export default Home;