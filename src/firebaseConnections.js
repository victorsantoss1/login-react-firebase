import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBxznmhDzKK32ZB1fwXIZ0GO7hPdwYQyx0",
  authDomain: "curso-ab487.firebaseapp.com",
  projectId: "curso-ab487",
  storageBucket: "curso-ab487.appspot.com",
  messagingSenderId: "716834494456",
  appId: "1:716834494456:web:4773573c08a6dfce9d680d",
  measurementId: "G-WW8Q1NRTFT"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { db, auth };