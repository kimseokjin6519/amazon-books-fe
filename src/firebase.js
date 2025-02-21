
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMmpRPiToY6Qmxe3rvUN28s8yKp82VX1Q",
  authDomain: "fir-fe-test-cbe3d.firebaseapp.com",
  projectId: "fir-fe-test-cbe3d",
  storageBucket: "fir-fe-test-cbe3d.firebasestorage.app",
  messagingSenderId: "8126774267",
  appId: "1:8126774267:web:d51e9dd2792b08f317e95e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };
