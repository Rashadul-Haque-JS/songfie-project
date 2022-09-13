import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { removeSignup } from '../../../features/booleanSlicer'
import { signup, saveToken } from '../../../api/api'
import { addLogedUser, addToken, getPhoto } from '../../../features/users/authSlicer'
import { useDispatch } from 'react-redux'
import { setLocalStorage } from '../../../common/localStorage';


const Signup = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [img, setImg] = useState(null);


    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", name);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("image", img);

        const res = await signup(formData)
        const data = res.data
        if (res.data) {
            dispatch(addLogedUser(data.newUser))
            dispatch(addToken(data.token))
            saveToken(data.token)
            // dispatch(getPhoto())
            navigate('/')
            dispatch(removeSignup())
            setLocalStorage('user', data.newUser)
            setLocalStorage('token', data.token)
        }

        
    }

    return (
        <div className="loginContainer">
            <div className='form-wrapper'>
                <form className='login-container' onSubmit={handleSubmit} >
                    <input type="text" placeholder='full name (no space between letters)' value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" placeholder='username (no space between letters)' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="text" placeholder='email adress' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginTop: '12px' }}>
                        <p >upload profile image</p>

                        <input type="file" onChange={(e) => setImg(e.target.files[0])} />

                    </span>
                    <button>signup</button>
                </form>
                <div className='manageLogin'>
                    <div >
                        <p className='reset' onClick={() => dispatch(removeSignup())}>login</p>
                    </div>
                    <div>
                        <p className='register'>Thank you</p>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default Signup;