// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD72QnVGoPmGMzoTJuZ2dm2yVck_pqWrcs",
  authDomain: "entrega-final-reactjs.firebaseapp.com",
  projectId: "entrega-final-reactjs",
  storageBucket: "entrega-final-reactjs.appspot.com",
  messagingSenderId: "519201059106",
  appId: "1:519201059106:web:1936ed1067cf2e7a9d757b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();