import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
let fbObj = {
    apiKey: "AIzaSyCNBORCvNqBXXGeY9AaV3S51Rf1_-TOdig",
    authDomain: "resume-builder-cb251.firebaseapp.com",
    projectId: "resume-builder-cb251",
    storageBucket: "resume-builder-cb251.appspot.com",
    messagingSenderId: "184174211145",
    appId: "1:184174211145:web:8768335260e0e362dbcf98",
    measurementId: "G-CQ0NK5G71N"
}
firebase.initializeApp(fbObj);
export default firebase;
