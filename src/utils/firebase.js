// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqAucOOtWE4GWHeGNZ-a2itUSuogbyHwc",
  authDomain: "netfilx-48451.firebaseapp.com",
  projectId: "netfilx-48451",
  storageBucket: "netfilx-48451.appspot.com",
  messagingSenderId: "375977055128",
  appId: "1:375977055128:web:0583e7fb7c50317d7911ed",
  measurementId: "G-YPB0REXHQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();