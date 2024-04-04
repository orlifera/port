import React, { useState, useEffect } from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

function Heading() {
    const [text] = useTypewriter({
        words: ['a Frontend Dev', 'Learning Fullstack Dev', 'a Scuba Diver', 'Gamer', 'a Cybersecurity Passionate', 'a Tech Enthusiast', 'an Entrepreneur'],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 40,
    });

    const title = `I'm Orlando and I'm`

    return (
        <div id='home'>
            <h1 id='title'>Hello World!</h1>
            <h3 id='typewriter'>{ title } <span id='change'> { text }</span></h3>
            <section className='description'>
                <p>
                    Get to now me by heading down to the <Link className='inline-link' to='/About'>About Me</Link> page or check out my <Link className='inline-link' to='/Projects'>Projects</Link>.
                </p>
            </section>
            <section className='description'>
                <h3 id='tic-header'>
                    Or just enjoy a game of Tic Tac Toe down below.
                </h3>
            </section>
        </div>
    );

}
export default Heading