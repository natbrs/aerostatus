import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsSb0tl71MZ11tKE67Mz-aL_RFEc6DebU",
  authDomain: "aerostatus.firebaseapp.com",
  projectId: "aerostatus",
  storageBucket: "aerostatus.appspot.com",
  messagingSenderId: "27822602922",
  appId: "1:27822602922:web:fe85e98edafd6a909f6ed3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };