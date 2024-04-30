// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrKOnkhzBXfQUjmD5aD6rqvPzNLWCk3I",
  authDomain: "fir-jt-20fca.firebaseapp.com",
  projectId: "fir-jt-20fca",
  storageBucket: "fir-jt-20fca.appspot.com",
  messagingSenderId: "1024387252597",
  appId: "1:1024387252597:web:3e7aaf40464612cd11d33c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { provider, auth };
