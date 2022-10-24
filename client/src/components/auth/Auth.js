import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Auth.scss";
import LoginForm from './authComponents/LoginForm'
import Signup from './authComponents/SignupForm'
import ForgotPassword from './authComponents/ForgotPassword'
import { useSelector } from 'react-redux';



const AuthRegister = () => {
  const user = useSelector((state) => state.authReducer.logedInUser);
  const signup = useSelector((state) => state.booleanReducer.signup);
  const reset = useSelector((state) => state.booleanReducer.reset);

  return (
    <div className="auth">
      <div className="authWrapper">
        <div className="authText">
          {user === null && (
            <h1 className="h3">Songfie respect and appriciate your singing</h1>
          )}
        </div>
      </div>
      {user === null && signup && <Signup />}
      {user === null && reset && !signup && <ForgotPassword />}
    </div>
  );
};

export default AuthRegister;
