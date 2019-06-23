import React, { useCallback, useContext, useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import App from "../../utils/firebase";
import { AuthContext } from "../../utils/Auth";
import SignIn from '../../components/forms/SignIn/SignIn';
import Register from '../../components/forms/Register/Register';
import Jumbotron from '../../components/launchJumbo/launchJumbo';

import './Login.css';

const Login = ({ history }) => {

    const [newUser, setNewUser] = useState(false);

    const handleLogin = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await App
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            setNewUser(true);
            console.log(error);
        }
    }, [history]);

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await App
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);


    const { currentUser } = useContext(AuthContext);



    return (
        <>
            <Jumbotron />
            <div className='container-fluid formContainer'>
                {!newUser ? (<SignIn onSubmit={handleLogin} setNewUser={setNewUser} />) : (<Register onSubmit={handleSignUp} />)}
            </div>
        </>
    )
};

export default withRouter(Login);