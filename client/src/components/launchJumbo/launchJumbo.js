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
                <h1 className="display-4 wow slideInRight">Hello, world!</h1>
                <p className="lead wow slideInRight">This is a sample</p>
                <header className="my-4 wow slideInRight">
                    <p>It uses utility classes</p>
                </header>
            </div>
        </>
    )
}

export default LaunchJumbo;