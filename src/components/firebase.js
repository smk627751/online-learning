import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyApc4PpQ096yeuaxcmWrq_AXaEuIHvQrXY",
    authDomain: "react--login-e477f.firebaseapp.com",
    projectId: "react--login-e477f",
    storageBucket: "react--login-e477f.appspot.com",
    messagingSenderId: "240153620449",
    appId: "1:240153620449:web:2d02f9578889186ccdeca0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
export const signIn = async (setImg,user,Email) => {
    const res = await signInWithPopup(auth,provider)
    const {displayName,email,photoURL} = res.user
    setImg(photoURL)
    user.current.value = displayName
    Email.current.value = email
    console.log({displayName,email,photoURL})
}