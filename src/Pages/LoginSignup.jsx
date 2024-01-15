import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const LoginSignup = () => {
  const [state, setState] = useState('Login');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;
      console.log(user);
      
      localStorage.setItem('authToken', user.accessToken);
      window.location.replace('/');
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid email or password. Please try again.');
    }
  };

  const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem('authToken', user.accessToken);
      window.location.replace('/');
    } catch (error) {
      console.error('Signup error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="logindignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          <input
            type='email'
            placeholder='Email Address'
            onChange={(event) => {
              if (state === 'Sign Up') {
                setRegisterEmail(event.target.value);
              } else {
                setLoginEmail(event.target.value);
              }
            }}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(event) => {
              if (state === 'Sign Up') {
                setRegisterPassword(event.target.value);
              } else {
                setLoginPassword(event.target.value);
              }
            }}
          />
        </div>
        <button onClick={() => { state === 'Login' ? login() : signup() }}>Continue</button>
        {state === 'Sign Up' ? (
          <p className='loginsignup-login'>
            Already have an account?<span onClick={() => { setState('Login') }}>Login here</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Create an account<span onClick={() => { setState('Sign Up') }}>Click here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
