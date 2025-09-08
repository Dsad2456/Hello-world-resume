import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATMYRlWy3YIY17n-is8DWD1rXRgRctJbg",
  authDomain: "hello-world-resume-af27d.firebaseapp.com",
  projectId: "hello-world-resume-af27d",
  storageBucket: "hello-world-resume-af27d.firebasestorage.app",
  messagingSenderId: "443843510086",
  appId: "1:443843510086:web:0e5d3a577a25eafc756f47"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); 
