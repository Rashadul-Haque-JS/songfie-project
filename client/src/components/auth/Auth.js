import React, { useState } from 'react'
import "./Auth.scss";
import LoginForm from './LoginForm'
import Signup from './SignupForm'
import { useSelector } from 'react-redux';

export default function Login() {
    const user = useSelector((state) => state.authReducer.logedInUser)
    const signup = useSelector((state) => state.booleanReducer.signup)


    return (
        <div className='auth'>
            <div className='loginWrapper'>
                <div className='loginText'>
                    <h1>Songfie respect and appriciate your singing</h1>
                </div>
            </div>
            {user === null && !signup && < LoginForm />}
            {user === null && signup && <Signup />}

        </div>
    )
}