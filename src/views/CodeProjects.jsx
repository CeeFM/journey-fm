import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'

function CodeProjects() {

    return (
        <>
            <div className='w-25' style={{"marginTop": '25vh', "width": "100%"}}>
                <h1>Code</h1>
                <p className='w-25'>Here's where you can find all of the code projects I've added so far</p>
            </div>
            <div>
                <h3>Decideify (March 2023)</h3>
                <p>Tired of wasting precious time endlessly scrolling through options? Introducing Decideify - a revolutionary content recommendation platform designed to revolutionize the way users discover movies, TV shows, books, and music!

                    Our cutting-edge program offers personalized suggestions tailored to your unique preferences, ensuring a seamless and enjoyable content consumption experience.

                    Powered by sophisticated algorithms and advanced user input mechanisms, our platform analyzes genre, release year, and other key factors to deliver targeted recommendations. Whether you're seeking a specific genre or open to serendipitous discoveries, our intuitive interface adapts to your preferences, providing tailored suggestions with just the right level of input.

                    Harnessing the power of multiple APIs specialized for each content type, our platform seamlessly integrates data from leading sources to curate a comprehensive and diverse selection of recommendations. From blockbuster hits to hidden gems, our vast library has something for every taste and mood.

                    Join us on a journey of exploration and discovery as we redefine the way you experience entertainment. Say goodbye to decision fatigue and hello to endless inspiration – welcome to the future of content discovery!</p>
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
                <iframe
                    src="https://www.loom.com/embed/c27912932e1f4d0bb442f34cb3f8530a?sid=b93e0136-be89-4dff-a494-db72d5767771"
                    frameBorder="0"
                    allow="fullscreen; webkitallowfullscreen; mozallowfullscreen"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                </iframe>
            </div>
            <div>
                <h3>Playoff Basketball Slot Machine</h3>
                <p>
                    Introducing a groundbreaking fantasy basketball experience designed to captivate both enthusiasts and novices alike! Embark on an exhilarating journey where you handpick a dream team of five players and pit them against the formidable CPU squad in intense best-of-seven matchups. Immerse yourself in the rich tapestry of NBA playoff records as real stats come to life, fueling the excitement and strategic depth of each game.

                    Prepare to elevate your basketball fandom to new heights as you uncover hidden gems of NBA history, engage in pulse-pounding showdowns, and immerse yourself in the ultimate fantasy basketball experience. Welcome to the future of fantasy sports gaming – where passion meets innovation!
                </p>
            </div>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0' }}>
                <iframe
                    src="https://www.loom.com/embed/f747aefdc57845568db68d92d49dbf7d?sid=b93e0136-be89-4dff-a494-db72d5767771"
                    frameBorder="0"
                    allow="fullscreen; webkitallowfullscreen; mozallowfullscreen"
                    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}>
                </iframe>
            </div>
                    </>
    )
}

export default CodeProjects