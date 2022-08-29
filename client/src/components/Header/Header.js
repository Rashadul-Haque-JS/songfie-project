import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import logo from '../../assets/image/static/logo_home.png'
import mic from '../../assets/image/static/microphone.png'
import menu from '../../assets/image/static/icon_menu.png'
import { logout } from '../../api/api'
import './Header.scss'
import { removeLocalStorage } from '../../common/localStorage'
import { logOutUser, removeToken } from '../../features/users/authSlicer'

export default function Header() {
    const user = useSelector((state) => state.authReducer.logedInUser)
    const { pathname } = useLocation()
    const dispatch = useDispatch()

    const handleLogout = () => {
        removeLocalStorage('user')
        removeLocalStorage('token')
        logout()
        dispatch(logOutUser())
        dispatch(removeToken())
    }

    return (
        <div className='primaryHeader sticky-top'>
            <div className='headerUpper '>
                <div className='microphone'>
                    <img src={menu} alt='menu' />
                </div>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='headerUpperUser'>
                    <div className='microphone'>
                        <img src={mic} alt='mic' />
                    </div>
                </div>
            </div>
            {pathname !== '/auth' && <div className='headerLowerUser'>
                {user === null && <Link to='/auth'>
                    <button className='btn btn-primary btn-sm'>Login</button>
                </Link>}
                {user !== null && <div className='username' >
                    <h5>{user.name}</h5>
                    <span className='logout' onClick={handleLogout}>Logout</span>
                </div>}

            </div>}
        </div>

    )



}