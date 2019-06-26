import React, { useEffect } from 'react';
import WOW from 'wowjs';
import './launchJumbo.css';

const LaunchJumbo = props => {

    const animateHeader = () => {
        const wow = new WOW.WOW();
        wow.init();
    }

    useEffect(animateHeader, []);

    return (
        <>
            <div className='jumbotron'>
                
                Scraps
                
            </div>
        </>
    )
}

export default LaunchJumbo;