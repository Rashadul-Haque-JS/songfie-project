import React from 'react'
import avatar from '../../assets/image/static/round.png'
import './Comments.scss'
const SingleComment = ({ comment, reply }) => {

  return (
      <div className='singleComment'>
          <div className="imageContainer">
              <img src={avatar } alt='avatar'/>
          </div>
          <div className="commentPartRight">
              <div className="commentContent">
                  <div className="commentor">{comment.username}</div>
                  <div>{ comment.createdAt}</div>
                  <div className='commentText'>{comment.text}</div>
                  {reply.length > 0 && (<div className='reply'>
                      {reply.map(r => (
                          <SingleComment comment={r} key={ r.id} reply={[]}/>
                      ))}
                  </div>)}
              </div>
          </div>
    </div>
  )
}

export default SingleComment