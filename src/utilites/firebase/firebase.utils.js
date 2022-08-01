import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDk2lZgV2SiGkJBPG8FxWCCcbOnvNmnrgM",
  authDomain: "user-authentication-1add8.firebaseapp.com",
  projectId: "user-authentication-1add8",
  storageBucket: "user-authentication-1add8.appspot.com",
  messagingSenderId: "315353464318",
  appId: "1:315353464318:web:6b5e28671e4a2ef173d4af",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWidthGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userShanpshot = await getDoc(userDocRef);

  if (!userShanpshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userDocRef;
};
