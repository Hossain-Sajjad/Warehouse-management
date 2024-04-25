// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  apiKey: "AIzaSyDWph3C0k_rngzLK0RIo3nUr9AK4B6eXtI",
  authDomain: "hossain-electronics.firebaseapp.com",
  projectId: "hossain-electronics",
  storageBucket: "hossain-electronics.appspot.com",
  messagingSenderId: "747776665424",
  appId: "1:747776665424:web:d2ba9aa2dda13f88456e55",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
