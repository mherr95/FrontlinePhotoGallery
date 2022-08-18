import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

