import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AudioProjects from './AudioProjects'
import CodeProjects from './CodeProjects'
import Pictures from './Pictures'

function ApplicationViews() {
    const [count, setCount] = useState(0)

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='audio' element={<AudioProjects />} />
            <Route path='code' element={<CodeProjects />} />
            <Route path='pictures' element={<Pictures />} />
        </Routes>
    )
}

export default ApplicationViews