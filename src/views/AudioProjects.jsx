import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'

function AudioProjects() {

    return (
        <>

            <div className="landing-page">
                <header className="hero-section">
                    <div className='w-25' style={{ "margin-top": '25vh', "width": "100%" }}>
                        <h1>Audio</h1>
                        <p className='w-50'>Here's where you can find all of the audio projects I've added so far</p>
                    </div>
                    <br />
                    <div>
                    <audio controls>
                        <source src={song} />
                    </audio>
                    </div>  
                </header>
                <footer className="footer">
                    <p>&copy; 2024 MyPortfolio. All Rights Reserved.</p>
                    <div className="social-links">
                        <a href="#linkedin">LinkedIn</a>
                        <a href="#github">GitHub</a>
                        <a href="#twitter">Twitter</a>
                    </div>
                </footer>
            </div>  
        </>
    )
}

export default AudioProjects