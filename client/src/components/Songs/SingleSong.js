import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SongSuggestion from './SongSuggestion'
import Comments from '../Comments/Comments'

const SingleSong = () => {
    const inPlay = useSelector((state) => state.audioReducer.inPlay)
    const users = useSelector((state) => state.usersReducer.users)
    const user = users.find((usr) => usr._id === inPlay.userId)
    return (
        <div className='singleSongPage'>
            <Link to='/songs'>song list</Link>
            <div className="spInfo">
                {Object.keys(inPlay).length !== 0 && <div className="spNestedCard">
                    <div className="imgbox">
                        <img src={require(`../../assets/image/dynamic/${inPlay.image}`)} alt='track cover' />
                    </div>
                    <div className='title'><h4>{inPlay.title}</h4></div>
                </div>}
                <div className="tracksInfo">
                    <div className="userInfo">
                        <img src={user.avatar} alt='user avatat' />
                        <div className="userName">
                            <p>Sung by:</p>
                            <h5>{user.username}</h5>
                        </div>
                    </div>
                    <p>Original singer: &nbsp; {inPlay.original_singer}</p>
                    <div className="audienceView">
                        <p>{inPlay.likes} loves</p>
                        <p>{inPlay.comments.length} comments</p>
                    </div>
                    <p className='text-capitalize'> Language:&nbsp;{inPlay.language}</p>
                </div>

            </div>
            <hr style={{ color: 'white' }} />
            <div className='songsComments'>
                <Comments />
                <SongSuggestion />

            </div>

            {Object.keys(inPlay).length === 0 && <div className="spNestedCard">
                <div className="imgbox">
                    Waiting....
                </div>

            </div>}
        </div>
    )
}

export default SingleSong