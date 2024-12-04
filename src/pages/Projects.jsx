// Projects.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json'; // Adjust the path if necessary

function Projects() {
    const { id } = useParams();
    const project = projectsData.find((project) => project.id === id);


    return (
        <>
            <h1 className='title'>Progetti completati</h1>
            <ul id="projects">
                { projectsData.map((projects) => (
                    <Link key={ projects.id } to={ `/${projects.id}` }>
                        <ProjectCard
                            path={ projects.path }
                            id={ projects.id }
                            projectName={ projects.projectName }
                            description={ projects.description }
                            repo={ projects.repo }
                        />
                        { console.log(projects.repo) }
                    </Link>
                )) }
            </ul>
        </>
    );
}

export default Projects;
