import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth'
// import { initializeApp } from "firebase/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// imagine this as the key to login to firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjQrkfaz5GvbM0L1dFgoZnsWbxCFLCKTk",
    authDomain: "netflix-clone-13ab1.firebaseapp.com",
    projectId: "netflix-clone-13ab1",
    storageBucket: "netflix-clone-13ab1.appspot.com",
    messagingSenderId: "112653502808",
    appId: "1:112653502808:web:9c91f8f2ebdfc67c00bd2d",
    measurementId: "G-85CPJ505G3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const auth = getAuth(firebaseApp);

export { auth };
export default db;

