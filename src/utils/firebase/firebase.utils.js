import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import {
  getFirestore, doc, getDoc, setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBw1yoz89VsA5KPJvUhOd2lVK5F5JoILLs',
  authDomain: 'crwn-clothing-db-7c6d0.firebaseapp.com',
  projectId: 'crwn-clothing-db-7c6d0',
  storageBucket: 'crwn-clothing-db-7c6d0.appspot.com',
  messagingSenderId: '920946791445',
  appId: '1:920946791445:web:0ffab62caaa048151b6a1c',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

console.log('firebaseApp', firebaseApp);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = { }) => {
  if (!userAuth) return {};

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // create/display user data if exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt, ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const createdUser = await createUserWithEmailAndPassword(auth, email, password);
  return createdUser;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const createdUser = await signInWithEmailAndPassword(auth, email, password);
  return createdUser;
};