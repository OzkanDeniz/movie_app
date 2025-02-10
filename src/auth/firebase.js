import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAELBU5NWRSAPngyDpvM07-Qrml-V0uwAk",
    authDomain: "movie-app-ef671.firebaseapp.com",
    projectId: "movie-app-ef671",
    storageBucket: "movie-app-ef671.firebasestorage.app",
    messagingSenderId: "53811918045",
    appId: "1:53811918045:web:36b5b6f92f36e09cee9734"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);