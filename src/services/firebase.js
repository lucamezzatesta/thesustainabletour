import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBtJaNFGXwG0tKHVX1BuschF82rK0K--Ek",
    authDomain: "the-sustainable-tour.firebaseapp.com",
    databaseURL: "https://the-sustainable-tour.firebaseio.com",
    projectId: "the-sustainable-tour",
    storageBucket: "the-sustainable-tour.appspot.com",
    messagingSenderId: "364425331947",
    appId: "1:364425331947:web:a67fec0828245253"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();