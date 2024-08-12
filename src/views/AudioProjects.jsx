import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'

function AudioProjects() {

    return (
        <>
            <div className='w-50'>
                <h1>Audio</h1>
                <p className='w-50'>Here's where you can find all of the audio projects I've added so far</p>
            </div>
            <p>Adding more text</p>
            <audio controls>
                <source src={song} />
            </audio>
        </>
    )
}

export default AudioProjects