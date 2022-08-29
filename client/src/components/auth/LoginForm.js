import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login, saveToken } from '../../api/api'
import { addLogedUser, addToken } from '../../features/users/authSlicer'
import { addSignup } from '../../features/booleanSlicer'
import { setLocalStorage } from '../../common/localStorage'

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
                saveToken(res.data.token);
                dispatch(addLogedUser(res.data.userData));
                dispatch(addToken(res.data.token));
                setLocalStorage('user', res.data.userData);
                setLocalStorage('token', res.data.token);
                navigate('/songs')
            }

        } catch (err) {
            console.log(err);
        }
    };

    const handleSignup = () => {
        dispatch(addSignup());
    }



    return (
        <div className="loginContainer">
            <div className='form-wrapper'>
                <form className='login-container' onSubmit={handleSubmit}>
                    <input type="text" placeholder='user name' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button>login</button>
                </form>
                <div className='manageLogin'>
                    <Link to='/resetPassword'>
                        <p className='reset'>Forgot password?</p>
                    </Link>
                    <div onClick={handleSignup}>
                        <p className='register' style={{ textDecoration: 'underline' }}>Signup</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginForm