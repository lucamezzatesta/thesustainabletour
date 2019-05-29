import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBtJaNFGXwG0tKHVX1BuschF82rK0K--Ek',
    authDomain: '"the-sustainable-tour.firebaseapp.com',
    databaseURL: "https://the-sustainable-tour.firebaseio.com",
    projectId: "the-sustainable-tour",
    storageBucket: "the-sustainable-tour.appspot.com",
    messagingSenderId: "364425331947"
}
firebase.initializeApp(config);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.database();