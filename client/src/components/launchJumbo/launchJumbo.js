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
<h1 className="animated">Scraps</h1>
</div>
        </>
    )
}

export default LaunchJumbo;