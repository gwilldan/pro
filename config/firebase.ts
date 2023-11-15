import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2tKDLHdWHvxwVcLpKWCVNy4cix41zmXU",
  authDomain: "des2dev-112eb.firebaseapp.com",
  projectId: "des2dev-112eb",
  storageBucket: "des2dev-112eb.appspot.com",
  messagingSenderId: "12221426352",
  appId: "1:12221426352:web:f78fae3f1c7e76b2fca975",
  measurementId: "G-K33ECBJFQG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
