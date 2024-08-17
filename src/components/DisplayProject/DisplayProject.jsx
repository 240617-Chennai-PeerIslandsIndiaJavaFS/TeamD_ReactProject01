import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import './DisplayProject.css'

function DisplayProject() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/projects');
                setProjects(response.data.data); 
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []); 

    return (
        <div className='project-display-component'>
            <div className="projects-grid">
                {Array.isArray(projects) && projects.length > 0 ? (
                    projects.map((project) => (
                        <ProjectCard key={project.projectId} project={project} />
                    ))
                ) : (
                    <p> Loading... </p>
                )}
            </div>
        </div>
    );
}

export default DisplayProject;
