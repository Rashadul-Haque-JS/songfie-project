import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Auth.scss";
import LoginForm from './LoginForm'
import Signup from './SignupForm'
import ResetPassword from './ResetPassword'
import { useSelector } from 'react-redux';

export default function Login() {
    const user = useSelector((state) => state.authReducer.logedInUser)
    const signup = useSelector((state) => state.booleanReducer.signup)
    const reset = useSelector((state) => state.booleanReducer.reset)


    return (
        <div className='auth'>
            <div className='loginWrapper'>
                <div className='loginText'>
                    {user !== null && <div className=" d-flex flex-column justify-content-center align-items-center">
                        <h1 className='h4'>You are already inlogged!</h1>
                        <Link to="/songs" className='mt-3 text-center'>Back To Gallery</Link>
                        </div>}
                    {user === null && <h1 className='h3'>Songfie respect and appriciate your singing</h1>}

                </div>
            </div>
            {user === null && !signup && !reset && < LoginForm />}
            {user === null && signup && <Signup />}
            {user === null && reset && !signup && <ResetPassword />}

        </div>
    )
}