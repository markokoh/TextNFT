import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0v69WSwA59ipmiReSbcbYX5G1dWlesZM",
  authDomain: "textnft-c54c9.firebaseapp.com",
  projectId: "textnft-c54c9",
  storageBucket: "textnft-c54c9.appspot.com",
  messagingSenderId: "220683353179",
  appId: "1:220683353179:web:d3f067c349f230890a937e",
  measurementId: "G-51HDVW9SP6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
