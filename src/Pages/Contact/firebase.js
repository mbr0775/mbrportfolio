import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase config for your project
const firebaseConfig = {
  apiKey: "your-api-key",                  // Replace with your actual API key from Firebase
  authDomain: "mbrportfoliowebsite.firebaseapp.com",  // Use your project name
  projectId: "mbrportfoliowebsite",         // Your project name
  storageBucket: "mbrportfoliowebsite.appspot.com",  // Storage bucket
  messagingSenderId: "your-messaging-sender-id",  // Replace with your messaging sender ID
  appId: "your-app-id",                     // Replace with your App ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, addDoc, collection };
