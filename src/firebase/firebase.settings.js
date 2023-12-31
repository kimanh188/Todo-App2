// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "todo-app-4db8a.firebaseapp.com",
  projectId: "todo-app-4db8a",
  storageBucket: "todo-app-4db8a.appspot.com",
  messagingSenderId: "548777730417",
  appId: "1:548777730417:web:23029d0fbf8bd49a0216d0",
  measurementId: "G-HWYT7YBMQV",
};
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
