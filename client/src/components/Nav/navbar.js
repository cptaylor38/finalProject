import React from 'react';
import './navbar.css';

const Navbar = ({ user, onClick }) => {

    return (
        <nav className="navbar">
            <div className='logoHolder'>
                <h1>SCRAPS</h1>
            </div>
            <div className='messageHolder'>
                <h3>Welcome, {user ? user : ''} </h3>
            </div>
            <div className='faceHolder'>
                <img src='https://slack-imgs.com/?c=1&url=https%3A%2F%2Fthumbs.gfycat.com%2FOrdinaryPartialAmericanredsquirrel-size_restricted.gif' alt='monkey gif' id='facePic'></img>
            </div>
        </nav>
    );
}

export default Navbar;