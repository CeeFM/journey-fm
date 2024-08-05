import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'

function ApplicationViews() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='w-50'>
                <h1>JourneyFM</h1>
                <p className='w-50'>I'm a regular guy in his mid 30's, committed to learning how to live again. I've decided to document my journey here in a variety of different mediums. Thank you for visiting it!</p>
            </div>
            <audio controls>
                <source src={song} />
            </audio>
        </>
    )
}

export default ApplicationViews