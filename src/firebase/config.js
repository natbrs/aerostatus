import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOVyWznC3R7mOgUsX-gFdY6czR-naiST4",
  authDomain: "appstatus-a1164.firebaseapp.com",
  projectId: "appstatus-a1164",
  storageBucket: "appstatus-a1164.appspot.com",
  messagingSenderId: "984293639755",
  appId: "1:984293639755:web:39a04e2b9622ca9275efce"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };