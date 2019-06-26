import React from 'react';
import './navbar.css';

const Navbar = ({ user, onClick }) => {

    return (
        <nav className="navbar">
            <div className='logoHolder'>
                <h1>スクラップ</h1>
            </div>
            <div className='messageHolder'>
                <h3>Welcome, {user ? user : ''} </h3>
            </div>
            <ul className="navbar-nav">
                <button onClick={event => onClick(event)}>Sign Out</button>
            </ul>

        </nav>
    );
}

export default Navbar;