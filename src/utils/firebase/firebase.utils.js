import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
console.log(firebaseApp);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // create/display user data if exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
};
