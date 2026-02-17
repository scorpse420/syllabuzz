import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC01b6mJ6t3B9GVu2-Rt_i8YzjCjsbEF2k",
  authDomain: "field-project-55974.firebaseapp.com",
  projectId: "field-project-55974",
  storageBucket: "field-project-55974.firebasestorage.app",
  messagingSenderId: "800009924937",
  appId: "1:800009924937:web:ea1be353bc6482bed2aa98",
  measurementId: "G-8GJ7S404J3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
