// Details.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
    const { id } = useParams(); // Get the ID from route params

    const projects = [
        {
            id: 1,
            img: '',
            title: 'ML Tech - E-commerce',
            description: 'Sito Web Full stack, sviluppato per il progetto universitario del corso di Web Development. E-Commerce basato sul sito mltech.store, di mia proprietà',
            repo: ''
        },
        // Add more projects as needed
    ];

    const project = projects.find(project => project.id === parseInt(id, 10)); // Find the project by ID

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div>
            <h2>{ project.title }</h2>
            <p>{ project.description }</p>
            {/* Render other project details */ }
        </div>
    );
}

export default Details;
