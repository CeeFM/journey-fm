import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function ApplicationViews() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route index element={<Home />} /> 
        </Routes>
    )
}

export default ApplicationViews