import React, { useContext } from 'react'
import { userContext } from '../Context/UserContextComponent';
import ProjectCard from './../DisplayProject/ProjectCard';
function DisplayProject() {
    const { projects } = useContext(userContext);
    return (
        <div>
            <div className="projects-grid">
                {
                Array.isArray(projects) && projects.length>0?(projects.map((project) => 
                    {  return <ProjectCard key={project.project_id} project={project} /> }
                    )) : (<p> No projects available. </p>)
                }
                </div>
        </div>
    )
}

export default DisplayProject