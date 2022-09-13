import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { disabled } from '../../../features/booleanSlicer';
import toast from 'react-hot-toast';
import '../Auth.scss'
import {forgotPassword} from '../../../api/api'

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const isDisabled = useSelector((state)=>state.booleanReducer.isDisabled)

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            const res = await forgotPassword(email)
            toast.success(res.data.message ,{duration: 10000})
            dispatch(disabled())

        }catch (error) {
            toast.error(error.message, {duration: 5000})
        }

    }
 
    return (
        <div className="loginContainer">
            <div className='form-wrapper'>
                <form className='login-container' onSubmit={handleSubmit} >
                    <fieldset disabled={isDisabled}>
                    <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button>Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword