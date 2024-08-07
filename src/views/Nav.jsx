import { useState } from 'react'
import '../App.css'
import song from '../118707__teqstudios__perfect-timing.mp3'
import { NavLink } from 'react-router-dom'
import { Button } from 'bootstrap'

function Nav() {

    return (
        <>
<ul>
    <button>Audio</button>
    <button>Code</button>
    <br />
    <NavLink>Pictures</NavLink>
    <NavLink>Words</NavLink>
</ul>
        </>
    )
}

export default Nav