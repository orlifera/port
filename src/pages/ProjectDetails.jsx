// ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import details from '../data/details.json';

function ProjectDetails() {
    const { id } = useParams(); // Get the project ID from URL parameters
    const project = details.find((project) => project.id === id); // Find project by ID

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className='projectDetails'>
            <dl className='detailsList'>
                <dt><h2>{ project.title }</h2></dt>
                <dd>
                    <figure>
                        <img id={ project.id } src={ project.img } alt={ project.title } />
                        <figcaption>{ project.caption }</figcaption>
                    </figure>
                </dd>
                <dd>
                    <p>{ project.description }</p>
                </dd>
                <dd>
                    <a target='_blank' rel='noopener noreferrer' href={ project.repo }>
                        <svg width="30px" height="30px" viewBox="0 0 20 20" className='icon'>
                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253..." />
                        </svg>
                    </a>
                </dd>
            </dl>
        </div>
    );
}

export default ProjectDetails;
