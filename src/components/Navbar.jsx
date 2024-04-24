import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import MobileNav from './MobileNav';
import { NavLink } from 'react-router-dom';

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
                <a id="logo" to="/">
                    <p>Orlando Ferazzani</p>
                </a>
                <ul>
                    <li>
                        <NavLink activeClassName="active" to="/"><span lang='en'>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/about"><span lang='en'>About Me</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/projects">Progetti</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/contact">Contatti</NavLink>
                    </li>
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

}



export default Navbar