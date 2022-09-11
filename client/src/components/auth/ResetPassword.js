import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.scss'
const ResetPassword = () => {

    const [email, setEmail] = useState('')
 
    return (
        <div className="loginContainer">
            <div className='form-wrapper'>
                <form className='login-container' onSubmit={''}>
                    <input type="text" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button>reset</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword