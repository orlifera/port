// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json'; // Adjust the path if necessary

function Projects() {
    return (
        <>
            <h1 className='title'>Progetti completati</h1>
            <ul id="projects">
                { projectsData.map((project) => (
                    <Link key={ project.id } to={ `/${project.id}` }>
                        <ProjectCard
                            path={ project.path }
                            id={ project.id }
                            projectName={ project.projectName }
                            description={ project.description }
                            repo={ project.repo }
                        />
                    </Link>
                )) }
            </ul>
        </>
    );
}

export default Projects;
