import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

function Navbar(props) {
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
                <a id="logo" to="/">
                    <p>Orlando Ferazzani</p>
                </a>
                <ul>
                    <CustomLink to="/"><span lang='en'>Home</span></CustomLink>
                    <CustomLink to="/About"><span lang='en'>About Me</span></CustomLink>
                    <CustomLink to="/Projects">Progetti</CustomLink>
                    <CustomLink to="/Skills"><span lang='en'>Skills</span></CustomLink>
                    <CustomLink to="/Contact">Contatti</CustomLink>
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


    function CustomLink({ to, children, ...props }) {
        const path = window.location.pathname;
        return (
            <li className={ path === to ? "active" : "" }>
                <Link to={ to } { ...props }>
                    { children }
                </Link>
            </li>
        )

    }
}



export default Navbar