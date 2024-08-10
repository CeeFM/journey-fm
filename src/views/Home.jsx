import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'

function Home() {

    return (
        <div className="landing-page">
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to My World</h1>
                    <p>I'm a [Your Profession] passionate about [Your Passion].</p>
                    <a href="#projects" className="cta-button">Explore My Work</a>
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
        </div>    )
}

export default Home