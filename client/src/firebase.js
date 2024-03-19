// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-83acd.firebaseapp.com",
  projectId: "mern-blog-83acd",
  storageBucket: "mern-blog-83acd.appspot.com",
  messagingSenderId: "673768581494",
  appId: "1:673768581494:web:19bca443cb127c27fd3257"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);