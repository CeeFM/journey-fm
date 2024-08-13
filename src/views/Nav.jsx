import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'
import { NavLink } from 'react-router-dom'
import { Button } from 'bootstrap'

function Nav() {

    return (
        <>
<div id='fuckinghell' className='sticky text-center'>
            <nav className="navbar">
                <div>
                    <div id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="btn" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn" href="/audio">Audio</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn" href="/code">Code</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn" href="/words">Words</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn" href="/pictures">Pictures</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
        </>
    )
}

export default Nav