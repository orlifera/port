import React, { useState } from 'react'
import Switch from './Switch'

function Navbar() {

    return (
        <nav id="menu">
            <a id="logo" href="index.html">
                <p>Orlando Ferazzani</p>
            </a>
            <ul>
                <CustomLink href="/"><span lang='en'>Home</span></CustomLink>
                <CustomLink href="/About"><span lang='en'>About Me</span></CustomLink>
                <CustomLink href="/Projects">Progetti</CustomLink>
                <CustomLink href="/Skills"><span lang='en'>Skills</span></CustomLink>
                <CustomLink href="/Contact">Contatti</CustomLink>
                <li id="switch">
                    <Switch />
                </li>
            </ul>
        </nav>
    )
    function CustomLink({ href, children, ...props }) {
        const path = window.location.pathname;
        return (
            <li className={ path === href ? "active" : "" }>
                <a href={ href } { ...props }>
                    { children }
                </a>
            </li>
        )

    }
}

export default Navbar