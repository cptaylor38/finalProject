import React from 'react';
import './SignIn.css';

const SignIn = ({ onSubmit, setNewUser }) => {


    const createAccount = event => {
        event.preventDefault();
        setNewUser(true);
    }


    return (
        <div className='signUpForm container'>
            <h1>Sign In</h1>
            <form onSubmit={onSubmit}>
                <div className='container loginContainer'>
                
                    <label>Email</label>
                    <input type="email" className='inputField' name="email" placeholder="Email" />
                    <label> Password </label>
                    <input type="password" className='inputField' name="password" placeholder="Password" />
                </div>
                <button type="submit" style={{ marginTop: '20px' }}>Sign In</button>
            </form>
            <h3 style={{ marginTop: '20px' }}>Don't have an account?</h3>
            <button className='default-button' onClick={event => createAccount(event)}>Create Account</button>
        </div>
        
    )
}

export default SignIn;