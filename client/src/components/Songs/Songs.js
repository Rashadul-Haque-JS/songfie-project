import React from 'react'
import { Link } from 'react-router-dom'
import './Songs.scss'
import { useSelector } from 'react-redux'
import SongCardSingle from './SongCardSingle'


const Songs = () => {
  const props = useSelector((state) => state.audioReducer.audio)
  const ct = useSelector((state) => state.audioReducer.inPlay)

  // Setting dynamic image for card...
  const bgImg = (img) => {
    return require(`../../assets/image/dynamic/${img}`)
  }

  return (
    <div className='songsPage'>
      <div className='songsList'>
        <div className='songsInnerNav'>
          <h1>Popular songs</h1>
          {Object.keys(ct).length !== 0 && <Link to={`/songs/${ct.title}`}>now</Link>}
        </div>

      <div className="songsListWrapper">
      {props.map((prop, index) => {
        return <SongCardSingle props={prop} bgImg={bgImg(prop.image)} key={index} />
        })}
      </div>
        <div className='songsInnerNav'>
          <h1>Popular songs</h1>
          {Object.keys(ct).length !== 0 && <Link to={`/songs/${ct.title}`}>now</Link>}
        </div>
      <div className="songsListWrapper">
        {props.map((prop, index) => {
          return <SongCardSingle props={prop} bgImg={bgImg(prop.image)} key={index} />
        })}
      </div>
        <div className='songsInnerNav'>
          <h1>Popular songs</h1>
          {Object.keys(ct).length !== 0 && <Link to={`/songs/${ct.title}`}>now</Link>}
        </div>
      <div className="songsListWrapper">

        {props.map((prop, index) => {
          return <SongCardSingle props={prop} bgImg={bgImg(prop.image)} key={index} />
        })}
        </div>
      </div>

    </div>
  )
}

export default Songs
