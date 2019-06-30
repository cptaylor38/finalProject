import React, { useCallback, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import App from "../../utils/firebase";
import SignIn from '../../components/forms/SignIn/SignIn';
import Register from '../../components/forms/Register/Register';
import Jumbotron from '../../components/launchJumbo/launchJumbo';
import API from '../../utils/API';

import './Login.css';

const Login = ({ history }) => {
    const [newUser, setNewUser] = useState(false);

    const checkUser = () => {
        // const user = App.auth().currentUser;
        App.auth().onAuthStateChanged(user => {
            if (user) history.push('/');
        })
    }

    useEffect(checkUser, []);

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
                    createMongoUser(res.user.uid, userName);
                });
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const createMongoUser = (userId, username) => {
        API.createUser({ id: userId, username: username });
    }

    return (
        <>
            <Jumbotron />
            <div className='container-fluid formContainer'>
                {!newUser ? (<SignIn onSubmit={handleLogin} setNewUser={setNewUser} />) : (<Register onSubmit={handleSignUp} newUser={newUser} setNewUser={setNewUser} />)}
            </div>
        </>
    )
};




export default withRouter(Login);