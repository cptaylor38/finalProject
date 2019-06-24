import React from 'react';
import './Register.css';

const Register = ({ onSubmit, setNewUser }) => {

    const returnLogin = () => {
        setNewUser(false);
    }

    return (
        <div className='registerForm container'>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div className='container registerContainer'>
                    <label> Email </label>
                    <input type="email" className='inputField' name="email" placeholder="Email" />
                    <label> Password </label>
                    <input type="password" className='inputField' name="password" placeholder="Password" />
                    <label> Username </label>
                    <input type="username" className='inputField' name="username" placeholder="Username" />
                </div>
                <button type="submit" style={{ marginTop: '20px' }}>Register</button>
                <button type="button" onClick={returnLogin}>Return to Login.</button>
            </form>
        </div>
    )
}

export default Register;