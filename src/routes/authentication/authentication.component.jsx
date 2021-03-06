// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import {
//   signInWithGooglePopup, createUserDocumentFromAuth,
//   // signInWithGoogleRedirect, auth,
// } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationContainer } from './authentication.styles';

function Authentication() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //   })();
  // }, []);

  return (
    <AuthenticationContainer>
      {/* <button onClick={logGoogleUser} type="button">
        Sign in with Google Popup
      </button> */}
      {/* <button onClick={signInWithGoogleRedirect} type="button">
        Sign in with Google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
}

export default Authentication;
