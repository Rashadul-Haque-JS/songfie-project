import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SingleComment from './SingleComment'
import './Comments.scss'
import Form from './Form'
import { createComment } from '../../api/api'
import { useDispatch } from 'react-redux'
import { insertComment } from '../../features/audioSlicer'

const Comments = ({ currentUserId }) => {
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.audioReducer.inPlay.comments)
    const baseComments = comments.filter(c => c.parentId === null)
    const label = 'Post comment'

    const getReply = (commentId) => {
        return comments.filter((comment) => comment.parentId === commentId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    }
    const postComment = async (text, parentId) => {
        const data = await createComment(text, parentId);
        dispatch(insertComment(data))

    }

    return (
        <div className='comments'>
            <h1 className='commentsTitle'>Comments</h1>
            <Form submitLabel={label} handleSubmit={postComment} />
            <div className="commentsContainer">
                {
                    baseComments && baseComments.map((baseComment) => (
                        <SingleComment key={baseComment.id} comment={baseComment} reply={getReply(baseComment.id)} />
                    ))}
            </div>

        </div>

    )
}
export default Comments