import React from 'react'
import { useSelector } from 'react-redux'
import './AudioPlayer.scss'
import ReactAudioPlayer from 'react-audio-player';


const AudioPlayer = () => {
    const selected = useSelector((state) => state.booleanReducer.play)
    const inPlay = useSelector((state) => state.audioReducer.inPlay)

    return (selected && inPlay.isPlaying) ?
        <div className='audioPlayer'>
            <ReactAudioPlayer
                src={require(`../../assets/audio/${inPlay.track}`)}
                autoPlay
                controls
            />
        </div> : null

}

export default AudioPlayer