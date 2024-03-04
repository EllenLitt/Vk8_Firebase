
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp, query, onSnapshot } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCBLyyqR7912JmJ_bMHcYw2kWdjFPtyb1w",
  authDomain: "chat-97995.firebaseapp.com",
  projectId: "chat-97995",
  storageBucket: "chat-97995.appspot.com",
  messagingSenderId: "785818303075",
  appId: "1:785818303075:web:bde5b759c6fb088f2a9656",
};


initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    query,
    onSnapshot,
    MESSAGES
};