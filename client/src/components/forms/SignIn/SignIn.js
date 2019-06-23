import React from 'react';

const SignIn = ({ onSubmit, setNewUser }) => {


    const createAccount = event => {
        event.preventDefault();
        setNewUser(true);
    }


    return (
        <div className='signUpForm container'>
            <h1>Sign In</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Email
                <input type="email" name="email" placeholder="Email" />
                </label>

                <label>
                    Password
                <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Sign In</button>
            </form>
            <h3>Don't have an account?</h3>
            <button className='default-button' onClick={event => createAccount(event)}>Create Account</button>
        </div>
    )
}

export default SignIn;