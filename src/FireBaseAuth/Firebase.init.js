// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpCJwGAzAKgGrnrv4TQQNrA87kCriUYnM",
  authDomain: "authflow-e6ed0.firebaseapp.com",
  projectId: "authflow-e6ed0",
  storageBucket: "authflow-e6ed0.firebasestorage.app",
  messagingSenderId: "110049754013",
  appId: "1:110049754013:web:51759c067585b221104d74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
