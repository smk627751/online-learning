import { initializeApp } from "firebase/app";
import {getDownloadURL, getStorage, ref, uploadString} from "firebase/storage"
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
const auth = getAuth(app)
const storage = getStorage()
const storageRef = ref(storage)
// const imagesRef = ref(storageRef,'images')

export const uploadToCloud = async (user,dataURL) => {
  const profileRef = ref(storageRef,`images/${user}.jpg`)

  const res = await uploadString(profileRef,dataURL,'data_url')
  // console.log(res)
  const url = await getDownloadURL(profileRef)
  // console.log(url)
  return url
}


export const googleSignIn = async (setImg,user,Email) => {
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth,provider)
    console.log(res)
    const {displayName,email,photoURL} = res.user
    setImg(photoURL)
    user.current.value = displayName
    Email.current.value = email
    console.log({displayName,email,photoURL})
}