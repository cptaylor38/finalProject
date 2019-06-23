import React from 'react';

const Register = ({ onSubmit }) => {
    return (
        <div className='registerForm container'>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <label>
                    Email
                <input type="email" name="email" placeholder="Email" />
                </label>

                <label>
                    Password
                <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;