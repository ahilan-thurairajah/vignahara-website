import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// These values are now updated with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHyt_gOex9PMZuoK8mtH5GAPs8JGjg21s",
  authDomain: "vignahara-website.firebaseapp.com",
  projectId: "vignahara-website",
  storageBucket: "vignahara-website.firebasestorage.app",
  messagingSenderId: "443443336671",
  appId: "1:443443336671:web:c2a96eafeb4fd4286ce06a",
  measurementId: "G-R8HZ7Y21DY"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const functions = getFunctions(app, 'us-central1');
