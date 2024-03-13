import React from 'react'
import Card from './Card'
import MLTech from '../assets/images/mltech.png'


function Projects() {
    return (
        <div className='container'>
            <ul id="projects">
                <Card path={ MLTech } projectName="ML Tech - E-commerce" description="Sito Web Full stack, sviluppato per il progetto universitario del corso di Web Development. E-Commerce basato sul sito mltech.store, di mia proprietà" repo="https://github.com/orlifera/TecWeb" />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </ul>
        </div>
    )
}

export default Projects