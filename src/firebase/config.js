import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlPVw-QcsDaJJbq7U7q9FnboSo4CTh9V0",
  authDomain: "appstatus-108d0.firebaseapp.com",
  projectId: "appstatus-108d0",
  storageBucket: "appstatus-108d0.appspot.com",
  messagingSenderId: "987303598890",
  appId: "1:987303598890:web:29c489fd6b44c7ba785c53"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };