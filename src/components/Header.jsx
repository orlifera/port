import React from 'react'
import logo from '../assets/images/logo_transparent.png'

function Header() {
    return (
        <header>
            <p className='name'>Orlando</p>

            {
                window.location.pathname === '/' ? (<a ><img src={ logo } id='logo'></img></a>) : (<a href='/'>
                    <img src={ logo } alt='logo' id='logo'></img>
                </a>)
            }


            <p className='name'>Ferazzani</p>
        </header>
    )
}

export default Header