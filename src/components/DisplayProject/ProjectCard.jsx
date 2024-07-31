import React from 'react';
import './ProjectCard.css'; 


function ProjectCard({project}) {
    const { project_name, project_description, team, tasks, status } = project;
    return (
        <div className="project-card">
            <div className="project-header">
                <h3>{project_name}</h3>
                {/* <span className={`status ${status.toLowerCase()}`}>{status}</span> */}
                <span className={`status completed`}>Completed</span>
            </div>
            <p className="project-description">{project_description}</p>
            <div className="project-footer">
                <span>{team.team_members.length} members</span>
                <span>{tasks.length} tasks</span>
            </div>
      </div>
    );
}

export default ProjectCard;
