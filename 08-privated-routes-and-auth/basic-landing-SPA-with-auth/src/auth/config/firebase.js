import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA3S4Db885b0a3CwFJZMy1-PCokwrz6-Rg',
  authDomain: 'basic-landing-spa.firebaseapp.com',
  projectId: 'basic-landing-spa',
  storageBucket: 'basic-landing-spa.appspot.com',
  messagingSenderId: '495702965009',
  appId: '1:495702965009:web:24b7c5eaec6732bbe7eab0',
  measurementId: 'G-S20Y342RK1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
