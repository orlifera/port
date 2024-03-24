import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom'


function Navbar() {
    const [size, setSize] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log("Navbar mounted");
    }, []);

    function handleResize() {
        setSize(window.innerWidth);
    }


    if (size > 768) {
        return (
            <nav id="menu">
                <a id="logo" href="/">
                    <p>Orlando Ferazzani</p>
                </a>
                <ul>
                    <CustomLink href="/"><span lang='en'>Home</span></CustomLink>
                    <CustomLink href="/About"><span lang='en'>About Me</span></CustomLink>
                    <CustomLink href="/Projects">Progetti</CustomLink>
                    <CustomLink href="/Skills"><span lang='en'>Skills</span></CustomLink>
                    <CustomLink href="/Contact">Contatti</CustomLink>
                    <li className="switch">
                        <Switch />
                    </li>
                </ul>
            </nav>
        )
    } else {
        return (
            <>
                <MobileNav />
            </>
        )
    }


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