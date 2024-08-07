import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'
import { NavLink } from 'react-router-dom'
import { Button } from 'bootstrap'

function Nav() {

    return (
        <>
<div id='fuckinghell'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/audio">Audio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/code">Code</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/words">Words</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pictures">Pictures</a>
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