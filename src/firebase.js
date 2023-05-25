

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQURCDfoVAAXn46g7PSyBZOPN6sq28RVM",
  authDomain: "e-shop-7f0a5.firebaseapp.com",
  projectId: "e-shop-7f0a5",
  storageBucket: "e-shop-7f0a5.appspot.com",
  messagingSenderId: "92260724909",
  appId: "1:92260724909:web:7ebecdb4ea208024579624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default firebaseConfig