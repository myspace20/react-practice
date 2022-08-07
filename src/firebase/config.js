// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDeyurPp2j28JWmcisZWlbwCGcCaTNr1dw",
  authDomain: "my-quiz-app-89988.firebaseapp.com",
  projectId: "my-quiz-app-89988",
  storageBucket: "my-quiz-app-89988.appspot.com",
  messagingSenderId: "678460630546",
  appId: "1:678460630546:web:90c3a92349f78c5f5f9acb",
  measurementId: "G-MCK14XEH2L"
};

initializeApp(firebaseConfig)

//initialize firestore
const db = getFirestore()

//initialize auth
const auth = getAuth()

export {db, auth}