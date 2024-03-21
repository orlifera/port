// Details.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectDetails from '../components/ProjectDetails'; // Import the ProjectDetails component
import mltech from '../assets/images/mltech.png';
import db from '../assets/images/ER_ristrutturato.png';
import gui from '../assets/images/pao.jpg'; //to be changed


function Details() {
    const { id } = useParams(); // Get the ID from route params

    const projects = [
        {
            id: 'MLTech',
            img: mltech,
            caption: 'ML Tech Home Page',
            title: 'ML Tech - E-commerce',
            description: 'Questo progetto è stato svolto tra novembre 2023 e febbraio 2024. Consisteva nel creare da 0 un sito web. Con il gruppo, abbiamo deciso di ricreare, in maniera differente e migliore il sito che utilizzo per la mia azienda. Fin da subito, dovendo utilizzare HTML5 e CSS3 ci siamo impegnati per rimanere consistenti e sviluppare un sito accessibile a tutte le categorie di utenti. Abbiamo deciso di utilizzare un design moderno e pulito, con un tema scuro e colori accesi dando comunuqe la possibilità di cambiare al tema chiaro. Abbiamo utilizzato JavaScript per la parte di interattività e PHP per la parte di back-end. Abbiamo utilizzato un database MySQL per la gestione dei dati. E\' possibile visualizzare il sito clonando la repo con il comando "git clone git@github.com:orlifera/TecWeb.git" e copiando la cartella sulla cartella htdocs di XAMPP. Successivamente, avviare Apache e MySQL e digitare "localhost/TecWeb" nella barra di ricerca del browser. Sarà necessario inoltre runnare il file sql nella console di phpMyAdmin.',
            repo: 'https://github.com/orlifera/TecWeb'
        },
        {
            id: 'DB',
            img: db,
            caption: 'Diagramma ER ristrutturato',
            title: 'DataBase for E-commerce',
            description: 'Progetto basato su un database per un sito e-commerce avanzato, con magazzini sparsi per diverse città. Il database è stato creato per il progetto universitario del corso di Basi di Dati, che richiedeva la creazione, e il popolamento dello stesso. Come tecnologie, io e il collega abbiamo usato PostgreSQL e PGAdmin per la creazione e il popolamento del DB e C/C++ per le querys. Inoltre, è presente un file C/C++ nel quale son racchiuse le query. Creando il DB su PGAdmin, è possibile poi interrogarlo con il suddetto file. ',
            repo: 'https://github.com/orlifera/ProgettoBasiDati'
        },
        {
            id: 'PAO',
            img: gui,
            caption: 'Diagramma UML della GUI',
            title: 'Tell Me Wine',
            description: 'Applicazione realizzata in coppia, per il progetto universitario del corso di Programmazione ad Oggetti. L\'applicazione è stata sviluppata in C++, con l\'ausilio di QT per la parte grafica. L\'applicazione è stata sviluppata per la gestione dei sensori di rilevazione dati per la produzione viti-vinicola, in particolare sensori di pressione, temperatura e umidità. I sensori sono organizzati in "Gruppi" che non sono altro che sensori collegati da un fattore logico comune. L\'applicazione è in grado di generare i dati secondo diverse distribuzioni che seguono l\'andamento reale del fenomeno misurato, gestire i sensori e le loro informazioni e creare un grafico per la visualizzazione dei dati misurati. Inoltre, è in grado di generare un file .json con i dati rilevati.',
            repo: 'https://github.com/orlifera/PaO'
        }
        // Add more projects as needed
    ];

    const project = projects.find(project => project.id === id); // Find the project by ID

    return (
        <>
            <ProjectDetails project={ project } />
        </>
    );
}

export default Details;
