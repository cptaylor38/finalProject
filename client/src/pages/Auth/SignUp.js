import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import App from "../../utils/firebase";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await App
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .updateCurrentUser({ displayName: this.username.value });
            history.push("/");
        } catch (error) {
            alert(error);
            // if (error) {
            //     console.log("It made it this far");
            //     return <Redirect to="/login" />
            // }
        }
    }, [history]);

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <label>
                    Username
                <input type="username" name="username" placeholder="Username" />
                </label>

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




export default withRouter(SignUp)