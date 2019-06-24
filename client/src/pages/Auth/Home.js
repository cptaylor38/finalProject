import React from "react";
import App from "../../utils/firebase";
import { AuthContext } from "../../utils/Auth";

const { currentUser } = useContext(AuthContext);

const Home = () => {
    return (
        <div>
            <h1>Welcome User! {currentUser.displayName}</h1>
            <button onClick={() => App.auth().signOut()}>Sign Out</button>
        </div>
    );
}

export default Home