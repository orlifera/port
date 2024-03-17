// Details.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import mltech from '../assets/images/mltech.png';
// import test from '../assets/images/test.png';

function Details() {
    const { id } = useParams();// Get the ID from route params


    const projects = [
        {
            id: 'MLTech',
            img1: mltech,
            caption: 'ML Tech Home Page',
            title: 'ML Tech - E-commerce',
            description: 'Questo progetto è stato svolto tra novembre 2023 e febbraio 2024. Consisteva nel creare da 0 un sito web. Con il gruppo, abbiamo deciso di ricreare, in maniera differente e migliore il sito che utilizzo per la mia azienda. Fin da subito, dovendo utilizzare HTML5 e CSS3 ci siamo impegnati per rimanere consistenti e sviluppare un sito accessibile a tutte le categorie di utenti. Abbiamo deciso di utilizzare un design moderno e pulito, con un tema scuro e colori accesi dando comunuqe la possibilità di cambiare al tema chiaro. Abbiamo utilizzato JavaScript per la parte di interattività e PHP per la parte di back-end. Abbiamo utilizzato un database MySQL per la gestione dei dati. E\' possibile visualizzare il sito clonando la repo con il comando "git clone git@github.com:orlifera/TecWeb.git" e copiando la cartella sulla cartella htdocs di XAMPP. Successivamente, avviare Apache e MySQL e digitare "localhost/TecWeb" nella barra di ricerca del browser. Sarà necessario inoltre runnare il file sql nella console di phpMyAdmin.',
            repo: 'https://github.com/orlifera/TecWeb'
        },
        {
            id: 'DB',
            img: '',
            title: 'Project 2',
            description: 'Description for project 2',
            repo: ''
        },
        {
            id: 'project3',
            img: '',
            title: 'Project 3',
            description: 'Description for project 3',
            repo: ''
        }
        // Add more projects as needed
    ];

    const project = projects.find(project => project.id === id); // Find the project by ID

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className='projectDetails'>
            <dl className='detailsList'>
                <dt><h2>{ project.title }</h2></dt>
                <dd>
                    <figure>
                        <img id='img_one' src={ project.img1 } alt={ project.title } />
                        <figcaption>{ project.caption }</figcaption>
                    </figure>
                </dd>
                <dd>
                    <p>{ project.description }</p>
                </dd>
                <dd>
                    <a target='_blank' href={ project.repo }>
                        <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='icon'>
                            <g id="Page-1" stroke="none" stroke-width="1">
                                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)">
                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                        <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </dd>
            </dl>

        </div>
    );
}

export default Details;
