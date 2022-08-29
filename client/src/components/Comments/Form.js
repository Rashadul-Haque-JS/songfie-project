import React, {useState }from 'react'
import './Comments.scss'
const Form = ({ submitLabel, handleSubmit }) => {
    const [text, setText] = useState("")
    const btnDisabled = text.length === 0;
    const onSubmit =(event) => {
        event.preventDefault()
        handleSubmit(text)
        setText("")
    }
  return (
    <form onSubmit={onSubmit} className='form-control form-control-sm'>
      <textarea className="form-control form-control-sm"  value={text} onChange={(e) => setText(e.target.value)} placeholder='write your comment...' />
      <button className='btn btn-primary btn-sm shadow-none' disabled={btnDisabled}>{ submitLabel}</button>
    </form>
  )
}

export default Form