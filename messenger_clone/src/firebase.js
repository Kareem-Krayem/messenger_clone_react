import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
//here are the configurations that you need to put from firebase
});

const db = firebaseApp.firestore();

export default db;
