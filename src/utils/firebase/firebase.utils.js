import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBsKrz_CeLLlSLL05d7d8E0rZJSpMcu3Dg",
  authDomain: "crwn-clothing-db-dfd9e.firebaseapp.com",
  projectId: "crwn-clothing-db-dfd9e",
  storageBucket: "crwn-clothing-db-dfd9e.appspot.com",
  messagingSenderId: "622915365454",
  appId: "1:622915365454:web:8a12aa92b352aeb64ab11f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapShot = await getDoc(userDocRef)

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log("error creating the user", error.message)
    }
  }

  return userDocRef
}