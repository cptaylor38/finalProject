import React, { useCallback, useContext, useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import App from "../../utils/firebase";
import SignIn from '../../components/forms/SignIn/SignIn';
import Register from '../../components/forms/Register/Register';
import Jumbotron from '../../components/launchJumbo/launchJumbo';
import API from '../../utils/API';

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
        const { email, password, username } = event.target.elements;
        let userName = username.value;
        try {
            await App
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(res => {
                    console.log(res.user.uid);
                    createMongoUser(res.user.uid, userName);
                });
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const createMongoUser = (userId, username) => {
        API.createUser({ id: userId, username: username })
            .then(res => {
                console.log(res + 'createUserapi .then() on login.js');
            })
            .catch(err => console.log(err + 'createUser .catch() on login.js'));
    }

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