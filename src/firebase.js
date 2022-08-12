// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFRKw_IAj17qU7vt-IEvaR_wUxj5LPPC4",
  authDomain: "twitter-clone-cb461.firebaseapp.com",
  projectId: "twitter-clone-cb461",
  storageBucket: "twitter-clone-cb461.appspot.com",
  messagingSenderId: "557467777864",
  appId: "1:557467777864:web:c7eb179f70c105a7be917d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebaseConfig.analytics();

const db = firebase.firestore();

export default db;


