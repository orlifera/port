import React, { useState } from 'react'
import Switch from './Switch'

function Navbar() {

    return (
        <nav id="menu">
            <a id="logo" href="index.html">
                <p>Orlando Ferazzani</p>
            </a>
            <ul>
                <li id="home" className="active"><a href="">Home</a></li>
                <li id="about"><a href="#about" lang="en">About Me</a></li>
                <li id="portfolio"><a href="">Progetti</a></li>
                <li id="skills"><a href="" lang="en">Skills</a></li>
                <li id="contacts"><a href="">Contatti</a></li>
                <li id="switch">
                    <Switch />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar