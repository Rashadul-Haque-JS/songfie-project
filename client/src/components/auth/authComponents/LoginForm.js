import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import { login } from '../../../api/api'
import { addLogedUser, addToken } from '../../../features/users/authSlicer'
import { addSignup, resetTrue } from '../../../features/booleanSlicer'
import { setLocalStorage } from '../../../common/localStorage'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await login(email, password);
            if (res.data.token) {
                dispatch(addLogedUser(res.data.authUser));
                dispatch(addToken(res.data.token));
                setLocalStorage('user', res.data.authUser);
                setLocalStorage('token', res.data.token);
                // dispatch(getPhoto(res.data.userData._id))
                navigate('/songs')
            }

        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    };

    const handleSignup = () => {
        dispatch(addSignup());
    }

    const handelePassword = () => {
        dispatch(resetTrue())
    }

    return (
        <div className="login">
            <div className='form-group'>
                <form className='login-form' onSubmit={handleSubmit}>
                    <label className='fw-bold'>Login</label>
                    <input type="text" placeholder='user name' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button>login</button>
                </form>
                <div className='manageLogin' >
                    <div onClick={handelePassword}>
                        <p className='reset'>Forgot password?</p>
                    </div>
                    <div onClick={handleSignup}>
                        <p className='register' style={{ textDecoration: 'underline' }}>Signup</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LoginForm