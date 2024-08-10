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
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <button class="nav-link active" aria-current="page" href="#">Home</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" href="/audio">Audio</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" href="/code">Code</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" href="/words">Words</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" href="/pictures">Pictures</button>
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