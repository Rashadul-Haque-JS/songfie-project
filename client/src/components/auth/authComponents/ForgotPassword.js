import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { disabled } from '../../../features/booleanSlicer';
import '../Auth.scss'
import { forgotPassword } from '../../../api/api'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const isDisabled = useSelector((state) => state.booleanReducer.isDisabled)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await forgotPassword(email)
            if (res.data.message) {
                setMessage(res.data.message)
                setError('')
                dispatch(disabled())

            }

        } catch (error) {
            setError('Something is wrong. ' + error.message)
            setMessage('')

        }

    }

    return (
        <div className="login d-flex flex-column flex-wrap justify-content-start">
            {message && <p className='my-4 text-success text-center' >{message}</p>}
            {error && <p className='my-4 text-danger text-center' >{error}</p>}
            <div className='form-group '>
                <form className='login-form' onSubmit={handleSubmit} >
                    <label className='fw-bold'>Reset request</label>
                    <fieldset disabled={isDisabled}>
                        <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <button>Send</button>
                    </fieldset>
                </form>
            </div>

        </div>
    )
}

export default ForgotPassword