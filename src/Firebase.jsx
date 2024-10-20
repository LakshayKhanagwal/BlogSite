import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"

const firebaseConfig = {
    apiKey: "AIzaSyDLhzm7ocGdFsEszJpZ_kdsSol8xLkXCSg",
    authDomain: "gitam-syllabus.firebaseapp.com",
    databaseURL: "https://gitam-syllabus-default-rtdb.firebaseio.com",
    projectId: "gitam-syllabus",
    storageBucket: "gitam-syllabus.appspot.com",
    messagingSenderId: "839795625075",
    appId: "1:839795625075:web:de8771757f6e39c2c66e06"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire.database().ref()