import React from 'react'
import Card from '../components/Card'
import MLTech from '../assets/images/LogoML.png'
import db from '../assets/images/db.png'
import pao from '../assets/images/pao.jpg'


function Projects() {
    return (
        <>
            <h1 className='title'>Progetti completati</h1>
            <div className='container'>
                <ul id="projects">
                    <Card
                        path={ MLTech }
                        id='MLTech'
                        projectName="ML Tech - E-commerce"
                        description="Sito Web Full stack, sviluppato per il progetto universitario del corso di Web Development. E-Commerce basato sul sito mltech.store, di mia proprietà"
                        repo="https://github.com/orlifera/TecWeb"

                    />
                    <Card
                        path={ db }
                        id='DB'
                        projectName="DataBase for E-commerce"
                        description="Database Mock per sito ecommerce basato sulla mia azienda"
                        repo="https://github.com/Pipp0z/ProgettoBasiDati"
                    />
                    <Card
                        path={ pao }
                        id='PAO'
                        projectName="Tell Me Wine"
                        description="Applicazione Desktop per la gestione dei sensori di rilevazione dati per produzione viti-vinicola"
                        repo="https://github.com/orlifera/PaO"

                    />


                </ul>
            </div>

        </>
    )
}

export default Projects