// Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
    const { id, path, projectName, description, repo } = props;

    return (
        <li className='card-container'>
            <Link to={ `/details/${id}` }>
                <div className="card">
                    <img className='profile-picture' alt="profile picture" src={ path }></img>
                    <h2 className='card-title'>Project: { projectName }</h2>
                    <p className='card-desc'>Description: { description }</p>
                    <a href={ repo }>
                        <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className='icon'>
                            {/* GitHub icon */ }
                        </svg>
                    </a>
                </div>
            </Link>
        </li>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    path: PropTypes.string,
    projectName: PropTypes.string,
    description: PropTypes.string,
    repo: PropTypes.string
};

Card.defaultProps = {
    path: "",
    projectName: "Project #",
    description: "This is a description, please don't blame the author.",
    repo: "https://github.com/orlifera"
};

export default Card;
