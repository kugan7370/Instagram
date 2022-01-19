// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Db
import { getFirestore } from 'firebase/firestore';

// Storage
import { getStorage, ref } from "firebase/storage";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDypOhu7Ki7S0nOYqmBawRAQErEZBPQsWs",
  authDomain: "intagram-clone-1.firebaseapp.com",
  projectId: "intagram-clone-1",
  storageBucket: "intagram-clone-1.appspot.com",
  messagingSenderId: "141357998108",
  appId: "1:141357998108:web:e3b8084345f386166a3fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage();
const db = getFirestore(app);
const auth = getAuth(app);



export { db, auth, app, storage };