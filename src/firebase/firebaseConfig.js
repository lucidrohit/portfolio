import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "portfolio-dev-9b7bc.firebaseapp.com",
  projectId: "portfolio-dev-9b7bc",
  storageBucket: "portfolio-dev-9b7bc.appspot.com",
  messagingSenderId: "827811983750",
  appId: "1:827811983750:web:36c48e6c9b4bda2cb5bc07",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export { signInWithPopup, GoogleAuthProvider };
