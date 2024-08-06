import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'

function CodeProjects() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='w-50'>
                <h1>Code</h1>
                <p className='w-50'>Here's where you can find all of the code projects I've added so far</p>
            </div>
        </>
    )
}

export default CodeProjects