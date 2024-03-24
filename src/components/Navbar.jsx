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
                    <Link to="/"><span lang='en'>Home</span></Link>
                    <Link to="/About"><span lang='en'>About Me</span></Link>
                    <Link to="/Projects">Progetti</Link>
                    <Link to="/Skills"><span lang='en'>Skills</span></Link>
                    <Link to="/Contact">Contatti</Link>
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