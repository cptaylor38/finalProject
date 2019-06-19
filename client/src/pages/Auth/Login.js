import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import App from "../../utils/firebase";
import { AuthContext } from "../../utils/Auth";

const Login = ({ history }) => {
    const handleLogin = useCallback( async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await App
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <h1>Login!</h1>
            <form onSubmit={handleLogin}>
                <label>
                    Email
                <input type="email" name="email" placeholder="Email" />
                </label>
                <label>
                    Password
                <input type="password" name="password" placeholder="Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
};

export default withRouter(Login);