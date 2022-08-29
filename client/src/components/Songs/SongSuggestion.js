import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SingleDisplayCard from './SongCardSingle'
import './Songs.scss'

const SongSuggestion = () => {
    const [suggestions, setSuggestions] = useState([])
    const allSongs = useSelector((state) => state.audioReducer.audio)
    const inPlay = useSelector((state) => state.audioReducer.inPlay)
    
useEffect(() => {
    const findSuggestions = () => {
        const result = allSongs.filter(song => song.language === inPlay.language)
        setSuggestions(result)
    }
    findSuggestions()
}, [])

    const bgImg = (img) => {
        return require(`../../assets/image/dynamic/${img}`)
    }

    return (
        <div className='songSuggestion'>
            <h1>You May Like</h1>
           <div className='songBox'>
                {suggestions.length > 0 && suggestions.map((prop, index) => {
                    return <SingleDisplayCard props={prop} bgImg={bgImg(prop.image)} key={index} />
                })}
           </div>

            {
                suggestions.length === 0 && <div>Waiting....</div>
            }

    </div>
    )
}

export default SongSuggestion
