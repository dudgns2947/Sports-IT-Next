// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAE9p6QtBL3Cqw1BwxnZr2VHuCJXp3qBo",
  authDomain: "sports-it-8a98a.firebaseapp.com",
  projectId: "sports-it-8a98a",
  storageBucket: "sports-it-8a98a.appspot.com",
  messagingSenderId: "794736896186",
  appId: "1:794736896186:web:a9b2361774678b08d47a83",
  measurementId: "G-4TJ4C9NGE0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
