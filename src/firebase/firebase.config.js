// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATI1UHuVzAs6ShE0o9ewIqfrMiB0vQ4i0",
    authDomain: "building-management-e8d78.firebaseapp.com",
    projectId: "building-management-e8d78",
    storageBucket: "building-management-e8d78.appspot.com",
    messagingSenderId: "1067515211520",
    appId: "1:1067515211520:web:95938be083c5fee3e70de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;