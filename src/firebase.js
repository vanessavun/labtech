import { initializeApp } from "firebase/app";
import {
  getFirestore
} from "firebase/firestore";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';

//Firebase: labtech
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE,
//   authDomain: "labtech-44e37.firebaseapp.com",
//   projectId: "labtech-44e37",
//   storageBucket: "labtech-44e37.appspot.com",
//   messagingSenderId: "361742183271",
//   appId: "1:361742183271:web:b5d63a35b771bb68da9dc2",
//   measurementId: "G-CV0L2DL4KL"
// };

// Firebase: labtech2
const firebaseConfig = {
  apiKey: "AIzaSyCEWc_5RTMe0zpNbdliBBhrAkRzMkV18nM",
  authDomain: "labtech2-2891b.firebaseapp.com",
  projectId: "labtech2-2891b",
  storageBucket: "labtech2-2891b.appspot.com",
  messagingSenderId: "494810660754",
  appId: "1:494810660754:web:d84a19097471678ab20b4b",
  measurementId: "G-3YP7FPNSHZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//GOOGLE PROVIDER WITH POPUP AND WITH REDIRECT
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//Sign out
export const signOutUser = async() => signOut(auth);

//Create user in Firebase
export const createUserDocumentFromAuth = async(userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
          await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInfo,
          });
      } catch(error) {
          console.log('error creating the user', error.message);
      }
  }
  return userDocRef;
}