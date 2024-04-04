import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import MobileNav from './MobileNav';
import { NavLink } from 'react-router-dom';

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
                <a id="logo" href="/">
                    <p>Orlando Ferazzani</p>
                </a>
                <ul>
                    <li>
                        <NavLink activeclasscame="active" to="/"><span lang='en'>Home</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeclasscame="active" to="/About"><span lang='en'>About Me</span></NavLink>
                    </li>
                    <li>
                        <NavLink activeclasscame="active" to="/Projects">Progetti</NavLink>
                    </li>
                    <li>
                        <NavLink activeclasscame="active" to="/Contact">Contatti</NavLink>
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