import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYw9o5CINlvaFoOjRi5BWYrvlIYBpdSzE",
  authDomain: "eselect-9074a.firebaseapp.com",
  databaseURL: "https://eselect-9074a-default-rtdb.firebaseio.com",
  projectId: "eselect-9074a",
  storageBucket: "eselect-9074a.appspot.com",
  messagingSenderId: "703487908866",
  appId: "1:703487908866:web:474083ac84e094cb181b1b",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
