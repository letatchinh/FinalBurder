import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCpeMnM_qFVVFGaChI2qi17CRfn04koWUI",
    authDomain: "burger-demo-44d52.firebaseapp.com",
    databaseURL: "https://burger-demo-44d52-default-rtdb.firebaseio.com",
    projectId: "burger-demo-44d52",
    storageBucket: "burger-demo-44d52.appspot.com",
    messagingSenderId: "986029817603",
    appId: "1:986029817603:web:487dbb5329d65a2f693336",
    measurementId: "G-XH1SQHZLQV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);