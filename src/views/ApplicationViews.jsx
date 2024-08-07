import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AudioProjects from './AudioProjects'
import CodeProjects from './CodeProjects'
import Pictures from './Pictures'
import Nav from './Nav'
import WordProjects from './WordProjects'

function ApplicationViews() {

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                    <Nav />
                    <Outlet />
                    </>
                }
                >
            <Route index element={<Home />} />
            <Route path='audio' element={<AudioProjects />} />
            <Route path='code' element={<CodeProjects />} />
            <Route path='pictures' element={<Pictures />} />
            <Route path='words' element={<WordProjects />} />

            </Route>
        </Routes>
    )
}

export default ApplicationViews