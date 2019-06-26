import * as firebase from "firebase/app";
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyB7eNVWltYqUsjVJzON9QqtyH9VBg1rgk0",
    authDomain: "scraps-bef0d.firebaseapp.com",
    databaseURL: "https://scraps-bef0d.firebaseio.com",
    projectId: "scraps-bef0d",
    storageBucket: "",
    messagingSenderId: "732859631435",
    appId: "1:732859631435:web:f791583d7a90abb6"
});

export default app;