import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName, email, password, confirmPassword,
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      // eslint-disable-next-line no-alert
      alert('passwords to not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use');
      } else {
        console.log('user error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>

        <FormInput
          label="Display Name"
          htmlFor="display-name"
          inputOptions={{
            onChange: handleChange,
            name: 'displayName',
            type: 'name',
            value: displayName,
            required: true,
          }}
        />
        <FormInput
          label="Email"
          htmlFor="email"
          inputOptions={{
            type: 'email',
            onChange: handleChange,
            name: 'email',
            value: email,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          htmlFor="password"
          inputOptions={{
            type: 'password',
            onChange: handleChange,
            name: 'password',
            value: password,
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          htmlFor="confirm-password"
          inputOptions={{
            type: 'password',
            onChange: handleChange,
            name: 'confirmPassword',
            value: confirmPassword,
            required: true,
          }}
        />
        <Button type="submit" buttonType="">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
