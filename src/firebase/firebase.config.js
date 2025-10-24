// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA-f5zJa2bbdFn3twJvbSluK7AbmZrao8",
  authDomain: "pet-care-winter-e4272.firebaseapp.com",
  projectId: "pet-care-winter-e4272",
  storageBucket: "pet-care-winter-e4272.appspot.com", // ✅ fixed
  messagingSenderId: "336127367717",
  appId: "1:336127367717:web:a8c80096487407b14dbdcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
