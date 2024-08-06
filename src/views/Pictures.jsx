import { useState } from 'react'
import '../App.css'

function Pictures() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='w-50'>
                <h1>Pictures</h1>
                <p className='w-50'>Here's where you can find all of the pictures I've added so far</p>
            </div>
        </>
    )
}

export default Pictures