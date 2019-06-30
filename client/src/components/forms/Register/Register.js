import React from 'react';
import './Register.css';

const Register = ({ onSubmit, setNewUser }) => {

    const returnLogin = () => {
        setNewUser(false);
    }

    return (
        <div className='signUpForm container'>
            <div className='container-fluid pageContainer'>
                <div className='row'>

                    <div className='windowsBox'>

                        <div className="title">
                            <img src="http://i63.tinypic.com/117hi0p.png" alt='windows 98 logo' width="18" height="18" />
                            <h1 className="title">Windows 95</h1>
                            <button>X</button>
                            <button>?</button>

                            <div className="registerTitle">
                                <h1>Register</h1>
                            </div>
                            <div className='scrollContents'>
                                <div className="boxIndent">
                                    <form onSubmit={onSubmit}>
                                        <div className='container registerContainer'>
                                            <label> Email </label>
                                            <input type="email" className='inputField' name="email" placeholder="Email" />
                                            <label> Password </label>
                                            <input type="password" className='inputField' name="password" placeholder="Password" />
                                            <label> Username </label>
                                            <input type="username" className='inputField' name="username" placeholder="Username" />
                                        </div>
                                        <button className="button-default" type="submit" style={{ marginTop: '20px' }}>Register</button>
                                        <button className="button-default" type="button" onClick={returnLogin}>Return to Login.</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">

                <button className="button-default"> <img src="http://i63.tinypic.com/117hi0p.png" alt='windows 98 logo' width="23" height="23" />Start</button>


            </div>
        </div>

    )
}

export default Register;