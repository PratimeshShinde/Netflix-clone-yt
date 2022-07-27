// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFgaCrok0o_9hNtkGUT9Bqw7YRHVcIEto",
  authDomain: "netflix-clone-yt-e421e.firebaseapp.com",
  projectId: "netflix-clone-yt-e421e",
  storageBucket: "netflix-clone-yt-e421e.appspot.com",
  messagingSenderId: "846789154786",
  appId: "1:846789154786:web:5256e99ffa2dfedd3d4bbb"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }