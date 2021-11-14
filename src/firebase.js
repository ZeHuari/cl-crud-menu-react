// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ZreNelwUlZHNDEDgrd_jyzSB7aAJ__E",
  authDomain: "cl-crud-react.firebaseapp.com",
  projectId: "cl-crud-react",
  storageBucket: "cl-crud-react.appspot.com",
  messagingSenderId: "466021850680",
  appId: "1:466021850680:web:97123177e6499ef14810cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);