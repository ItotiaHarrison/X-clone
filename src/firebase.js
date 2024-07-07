// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-clone-536b3.firebaseapp.com",
  projectId: "x-clone-536b3",
  storageBucket: "x-clone-536b3.appspot.com",
  messagingSenderId: "883425216018",
  appId: "1:883425216018:web:d4875dd67ffd9849b6bacb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);