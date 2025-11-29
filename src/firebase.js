// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-i9PnBXo0gyoC0JyG2h9jpbL5FGFr4yc",
    authDomain: "inventory-erp-99dd6.firebaseapp.com",
    projectId: "inventory-erp-99dd6",
    storageBucket: "inventory-erp-99dd6.firebasestorage.app",
    messagingSenderId: "593123150742",
    appId: "1:593123150742:web:45b2a8a4b464297fc26bb7",
    measurementId: "G-JNMCVN46QC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);