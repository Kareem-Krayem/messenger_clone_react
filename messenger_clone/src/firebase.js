import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAnCE24THkOe5JsfEXLhZrHGQcsMWVSEsk",
    authDomain: "kareem-messenger-clone.firebaseapp.com",
    databaseURL: "https://kareem-messenger-clone.firebaseio.com",
    projectId: "kareem-messenger-clone",
    storageBucket: "kareem-messenger-clone.appspot.com",
    messagingSenderId: "184491847756",
    appId: "1:184491847756:web:dff1249f601b26476004e9",
    measurementId: "G-KVS8XFWCGQ"
});

const db = firebaseApp.firestore();

export default db;