// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdMfTR45qOorlk4ex5-J76aGKORc4-LpI",
  authDomain: "netflix-gpt-3b98b.firebaseapp.com",
  projectId: "netflix-gpt-3b98b",
  storageBucket: "netflix-gpt-3b98b.appspot.com",
  messagingSenderId: "631140332424",
  appId: "1:631140332424:web:1277b9f76ac31abfcd803d",
  measurementId: "G-T9GTPXCF5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
