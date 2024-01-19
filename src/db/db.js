// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDew3n8ECgVx2DmVYpjFxJjwic_x05XTc8",
    authDomain: "misionerita-7e01b.firebaseapp.com",
    projectId: "misionerita-7e01b",
    storageBucket: "misionerita-7e01b.appspot.com",
    messagingSenderId: "639330916521",
    appId: "1:639330916521:web:ffc802614034654972b1b8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db;