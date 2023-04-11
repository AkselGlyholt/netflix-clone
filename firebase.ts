// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq2vzPnWcmWjdeOsQYcxxFtnqKv445f98",
  authDomain: "netflix-e7546.firebaseapp.com",
  projectId: "netflix-e7546",
  storageBucket: "netflix-e7546.appspot.com",
  messagingSenderId: "372881088839",
  appId: "1:372881088839:web:d1f75f2f3dea16b11f6c62",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
