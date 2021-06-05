import firebase from "firebase";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAzoJdN2D3RZeMB5b087p81YQ6_ZBl2qpo",
    authDomain: "resume4dev-fa38a.firebaseapp.com",
    databaseURL: "https://resume4dev-fa38a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resume4dev-fa38a",
    storageBucket: "resume4dev-fa38a.appspot.com",
    messagingSenderId: "901901085841",
    appId: "1:901901085841:web:8a490cf2038387e2e76330"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase
