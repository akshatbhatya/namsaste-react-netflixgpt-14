// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBShofWRw9ryjV0KZN390aR_Aa3AlkyhxI",
  authDomain: "netflix-gpt-99b5a.firebaseapp.com",
  projectId: "netflix-gpt-99b5a",
  storageBucket: "netflix-gpt-99b5a.appspot.com",
  messagingSenderId: "701619884723",
  appId: "1:701619884723:web:622a6c3dc24fb0ea9f56c6",
  measurementId: "G-8TF8S1BDVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);