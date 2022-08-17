// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/storage';
// import 'firebase/compat/firestore'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCok5QGxUOMsJdVnge8kkloP8K6m_f1tiI",
  authDomain: "frontlinepg-525da.firebaseapp.com",
  projectId: "frontlinepg-525da",
  storageBucket: "frontlinepg-525da.appspot.com",
  messagingSenderId: "846666485961",
  appId: "1:846666485961:web:b9ea9f78e0a928fa75fd18"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFireStore = getFirestore();

export {projectStorage, projectFireStore};

