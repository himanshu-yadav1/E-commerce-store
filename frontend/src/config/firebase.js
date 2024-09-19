// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "swift-store-c3d8d.firebaseapp.com",
    projectId: "swift-store-c3d8d",
    storageBucket: "swift-store-c3d8d.appspot.com",
    messagingSenderId: "876519473388",
    appId: "1:876519473388:web:d1f98ecdd528dfffdca5c9",
    measurementId: "G-M9NWZBZGDH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);