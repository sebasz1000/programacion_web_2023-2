import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY
const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID
const FIREBASE_STORANGE_BUCKET = import.meta.env.VITE_FIREBASE_STORANGE_BUCKET
const FIREBASE_MSG_SENDER_ID = import.meta.env.VITE_FIREBASE_MSG_SENDER_ID
const FIREBASE_APP_ID = import.meta.env.VITE_FIREBASE_APP_ID
const FIREBASE_MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORANGE_BUCKET,
  messagingSenderId: FIREBASE_MSG_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Creates a google Auth provider object
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
// Now we can get all firestore database info
export const db = getFirestore(app)
