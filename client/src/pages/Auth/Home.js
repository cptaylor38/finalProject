import React from "react";
import App from "../../utils/firebase";

const Home = () => {
    return (
        <div>
            <h1>Welcome User!</h1>
            <button onClick={() => App.auth().signOut()}>Sign Out</button>
        </div>
    );
}

export default Home