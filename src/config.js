import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCDH2d5fTog5QHdzATj3EacwdobhuIklOE",
    authDomain: "resume-builder-c4f20.firebaseapp.com",
    projectId: "resume-builder-c4f20",
    storageBucket: "resume-builder-c4f20.appspot.com",
    messagingSenderId: "979526374229",
    appId: "1:979526374229:web:19f062906615a60f3a95dc"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;
