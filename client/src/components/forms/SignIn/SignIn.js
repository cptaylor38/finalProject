import React from 'react';
import './SignIn.css';

const SignIn = ({ onSubmit, setNewUser }) => {


    const createAccount = event => {
        event.preventDefault();
        setNewUser(true);
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

                            <div className="signInTitle">
                                <h1>Sign In</h1>
                            </div>

                            <div className='scrollContents'>
                                <div className="boxIndent">
                                    <form onSubmit={onSubmit}>
                                        <div className='container loginContainer'>
                                            <label>Email</label>
                                            <input type="email" className='inputField' name="email" placeholder="Email" />
                                            <label> Password </label>
                                            <input type="password" className='inputField' name="password" placeholder="Password" />
                                        </div>


                                        <button className='button-default' type="submit" style={{ marginTop: '20px' }}>Sign In</button>
                                    </form>
                                </div>
                                <div className="boxIndent">
                                    <div className="account">

                                        <h3 style={{ marginTop: '20px' }}>Don't have an account?</h3>
                                        <div className="accountButton">
                                            <button className='button-default' onClick={event => createAccount(event)}>Create Account</button>
                                        </div>
                                    </div>
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
export default SignIn;