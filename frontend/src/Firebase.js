import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace with your Firebase project config
const firebaseConfig = {
 apiKey: "AIzaSyAtf8_lwf0qSXgpo0-NU1OVXLg79I8ysgc",
  authDomain: "webauth-df0d0.firebaseapp.com",
  projectId: "webauth-df0d0",
  storageBucket: "webauth-df0d0.firebasestorage.app",
  messagingSenderId: "628748722130",
  appId: "1:628748722130:web:ad47ccdea07e0d0928b20b",
  measurementId: "G-DNS2HPKR2L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);