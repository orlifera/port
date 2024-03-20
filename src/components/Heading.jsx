import React, { useState, useEffect } from 'react'
import { useTypewriter } from 'react-simple-typewriter';

function Heading() {
    const [text] = useTypewriter({
        words: ['a Frontend Dev', 'Learning Fullstack Dev', 'a scuba diver', 'gamer', 'a cybersecurity passionate', 'a tech enthusiast', 'an entrepreneur'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 40,
    });

    const title = `I'm Orlando and I'm ${text}`



    return (
        <>
            <h1 id='title'>Hello World!</h1>
            <p id='typewriter'>{ title }</p>
        </>
    );

}
export default Heading