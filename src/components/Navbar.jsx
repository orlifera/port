import React, { useEffect, useState } from 'react'
import Switch from './Switch'
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

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
                        <Link activeClassName="active" to="/"><span lang='en'>Home</span></Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/About"><span lang='en'>About Me</span></Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/Projects">Progetti</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" to="/Contact">Contatti</Link>
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