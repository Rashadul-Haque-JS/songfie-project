import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addInPlay, on } from '../../features/audioSlicer'
import { addBoolean } from '../../features/booleanSlicer'
import { Link } from 'react-router-dom'
import { setLocalStorage } from '../../common/localStorage'
import './Songs.scss'

const PlayController = ({ track }) => {
  const [play, setPlay] = useState(false)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addInPlay(track))
    dispatch(addBoolean())
    dispatch(on())
    setLocalStorage('track', track)

  }


  const onOffPlayer = () => {
    return play === false ? setPlay(true) : setPlay(false);
  }

  return (

    <Link className='routerLink' onClick={() => { onOffPlayer(); handleClick() }} to={`/songs/${track.title}`}>
      <div className='controller' >
        <button className="btnPlay" data-bs-placement="bottom" title="Play" > ▶ </button>
      </div>
    </Link>
  )
}

export default PlayController