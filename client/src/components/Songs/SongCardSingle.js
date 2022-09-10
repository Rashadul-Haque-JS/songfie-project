import React from 'react'
import './Songs.scss'
import { useSelector } from 'react-redux'
import PlayController from './SongController'
import avatar from '../../assets/image/static/round.png'

const SongCardSingle = ({ props, bgImg  }) => {
    const users = useSelector((state) => state.usersReducer.users)
    const user = users.find((usr) => usr.id === props.userId)


    return (
        <div className='songCardSingle' >
            <div className='songCoverImg' style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
                {user && <img src={user.avatar} alt='avatar' />}
                {!user && <img src={avatar} alt='avatar' />}

                <div className="ovarley"></div>
               <PlayController track={props} />
            </div>
            <div className='songTitle'>
                <h2>{props.title}...</h2>
                <p>Sung by : {props.user}</p>
            </div>
        </div>
    )
}

export default SongCardSingle