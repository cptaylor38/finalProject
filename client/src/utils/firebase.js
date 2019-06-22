import * as firebase from "firebase/app";
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBgdi1EhBr7N0MsZysRNWMCyDB43mwRqHM",
    authDomain: "pit-crew-project.firebaseapp.com",
    databaseURL: "https://pit-crew-project.firebaseio.com",
    projectId: "pit-crew-project",
    storageBucket: "",
    messagingSenderId: "359074059947",
    appId: "1:359074059947:web:04028fab13c0251d"
});

export default app;