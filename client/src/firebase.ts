import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBjBShrXBjLkfDbjBHIP8gFWDgPVHuuS0",
    authDomain: "scpf-26799.firebaseapp.com",
    databaseURL: "https://scpf-26799.firebaseio.com",
    projectId: "scpf-26799",
    storageBucket: "scpf-26799.appspot.com",
    messagingSenderId: "594504720912",
    appId: "1:594504720912:web:d2818bc5b4b15478296095",
    measurementId: "G-L7TSQZFDHK"
};

firebase.initializeApp(
    firebaseConfig
);

const firestore = firebase.firestore();

export {
    firebase,
    firestore
};