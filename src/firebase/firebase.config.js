// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcgb310x8gUd_WRJR3bNiI6Mhk7gDN34Q",
    authDomain: "hospital-management-syst-ceecf.firebaseapp.com",
    projectId: "hospital-management-syst-ceecf",
    storageBucket: "hospital-management-syst-ceecf.appspot.com",
    messagingSenderId: "928606487563",
    appId: "1:928606487563:web:c6ba4e09307b8030be730e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;