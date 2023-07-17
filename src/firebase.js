// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI3Ofn0GTAzoj4-_n6qna-ovYySNv6zac",
  authDomain: "peyo-88421.firebaseapp.com",
  projectId: "peyo-88421",
  storageBucket: "peyo-88421.appspot.com",
  messagingSenderId: "949614796551",
  appId: "1:949614796551:web:bb274cce70209951dd6fa2",
  measurementId: "G-BBZQ6TP86Q"
};
f
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);