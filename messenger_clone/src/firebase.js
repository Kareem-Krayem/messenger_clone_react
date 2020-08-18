import firebase from 'firebase';

//here are the configurations that you need to put from firebase
const firebaseApp = firebase.initializeApp({

});

const db = firebaseApp.firestore();

export default db;
