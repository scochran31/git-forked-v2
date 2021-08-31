
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAawNS7lmfU6CzUqdeJ1UUTaHo0d6fT_gA",
  authDomain: "git-forked.firebaseapp.com",
  projectId: "git-forked",
  storageBucket: "git-forked.appspot.com",
  messagingSenderId: "528430910253",
  appId: "1:528430910253:web:3c413a11f0ddf0e02421a4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db } 