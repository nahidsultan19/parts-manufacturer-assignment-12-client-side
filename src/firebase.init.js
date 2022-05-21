// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgvAcigL_RDVFwKCQqBh8a3--cnOgbmcM",
    authDomain: "parts-manufacturer-90332.firebaseapp.com",
    projectId: "parts-manufacturer-90332",
    storageBucket: "parts-manufacturer-90332.appspot.com",
    messagingSenderId: "552786716074",
    appId: "1:552786716074:web:ef4dee1a9c5fc1b8c277d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;