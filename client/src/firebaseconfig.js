import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDy5mNp33WksgZBDEH1_6fW-BlT75rpVW8",
    // apiKey: process.env.WT_ECOMMERCE_FIREBASE_API_KEY,
    authDomain: "ecommerce-70a8c.firebaseapp.com",

    projectId: "ecommerce-70a8c",

    storageBucket: "ecommerce-70a8c.appspot.com",

    messagingSenderId: "541599574903",

    appId: "1:541599574903:web:7b5b38cb7a74e42ab70f72",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
