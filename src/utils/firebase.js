// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS2HvCURSKoLz5XNdPJeNZPOU82f23iTU",
  authDomain: "netflixgpt-4860d.firebaseapp.com",
  projectId: "netflixgpt-4860d",
  storageBucket: "netflixgpt-4860d.firebasestorage.app",
  messagingSenderId: "398243506830",
  appId: "1:398243506830:web:704374d08573880f52f7df",
  measurementId: "G-E1ZPX0W899",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
