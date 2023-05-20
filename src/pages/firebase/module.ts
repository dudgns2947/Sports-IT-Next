import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
require("dotenv").config();

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDAE9p6QtBL3Cqw1BwxnZr2VHuCJXp3qBo",
  authDomain: "sports-it-8a98a.firebaseapp.com",
  projectId: "sports-it-8a98a",
  storageBucket: "sports-it-8a98a.appspot.com",
  messagingSenderId: "794736896186",
  appId: "1:794736896186:web:a9b2361774678b08d47a83",
  measurementId: "G-4TJ4C9NGE0",
};

export { firebaseConfig };
