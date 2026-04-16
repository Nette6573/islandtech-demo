import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDclshn6LN1qfYv82p1mHAi90GoWZ04TdY",
  authDomain: "islandtech-booking.firebaseapp.com",
  projectId: "islandtech-booking",
  storageBucket: "islandtech-booking.firebasestorage.app",
  messagingSenderId: "1045309843527",
  appId: "1:1045309843527:web:9c99242bdcceaeabdea962",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);