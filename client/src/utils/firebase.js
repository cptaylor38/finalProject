import * as firebase from "firebase/app";
import 'firebase/auth'

 // Your web app's Firebase configuration
 const app = firebase.initializeApp({
    apiKey: "AIzaSyD0kRuV5DAuoCVJm1iD-PK3hPjDUklCTtY",
    authDomain: "final-project-9d3db.firebaseapp.com",
    databaseURL: "https://final-project-9d3db.firebaseio.com",
    projectId: "final-project-9d3db",
    storageBucket: "final-project-9d3db.appspot.com",
    messagingSenderId: "580972046280",
    appId: "1:580972046280:web:eb1b173ad25f0d57"
 });

  export default app;