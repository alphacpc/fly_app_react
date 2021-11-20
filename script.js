// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1IJCnHpTFBXTLiJ96TbmMySRLyJbwKDo",
  authDomain: "fly-app-react.firebaseapp.com",
  projectId: "fly-app-react",
  storageBucket: "fly-app-react.appspot.com",
  messagingSenderId: "518704242045",
  appId: "1:518704242045:web:e39c258804a8c198368014",
  measurementId: "G-ZX8V561TMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);