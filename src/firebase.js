// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBo9OeMFwZDgfEq8670wQoZ77bw1LmvyJs",
  authDomain: "chat-app-75bb6.firebaseapp.com",
  projectId: "chat-app-75bb6",
  storageBucket: "chat-app-75bb6.appspot.com",
  messagingSenderId: "663284812082",
  appId: "1:663284812082:web:2d495eeaa87001cf34ef2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;