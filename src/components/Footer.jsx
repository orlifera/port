import React, { useState, useEffect } from 'react'

function Footer() {

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
            <footer id="bottom">
                <ul id='footer-list'>
                    <li>Orlando Ferazzani</li>
                    <li>2024</li>
                    <li><a href='mailto:orlandovm.ferazzani@gmail.com'>orlandovm.ferazzani@gmail.com</a></li>
                    <li><a href='https://mltech.store'>ML Tech</a></li>
                </ul>
            </footer>
        )
    } else {
        return (
            <></>
        )
    }


}

export default Footer