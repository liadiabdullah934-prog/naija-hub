// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5SPc-vS19ZcL7w8Tc7cuR9zppsZvPpb4",
  authDomain: "naijahub-3e1f7.firebaseapp.com",
  projectId: "naijahub-3e1f7",
  storageBucket: "naijahub-3e1f7.firebasestorage.app",
  messagingSenderId: "952823651995",
  appId: "1:952823651995:web:d7be07da17a1f4b11eb03e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };
