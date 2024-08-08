import React, {useContext } from 'react';
import ResetButton from '../buttons/ResetButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectNavbar1.css';
import { userContext } from '../Context/UserContextComponent';

const ProjectNavbar = ({ projectDetails, projectData }) => {
  const { userDetail, setUserDetail, projects, setProjects } = useContext(userContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <a className="navbar-brand d-flex align-items-center" href="#home">
        <span className="me-3">{projectData.project_name}</span>
      </a>
      <div className="navbar-nav me-auto">
        <ResetButton value="Details" onClick={() => projectDetails(prev => prev === "details" ? "default" : "details")}
 />
      </div>
      {userDetail.user_role=="MANAGER"?<button className='btn btn-success' onClick={() => projectDetails(prev => prev === "createTask" ? "default" : "createTask")}>Create Task</button>:<></>}

      <div className="navbar-nav ms-auto d-flex align-items-center">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-icon">
          <circle cx="12" cy="12" r="12" fill="#007BFF" />
        </svg>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-icon">
          <circle cx="12" cy="12" r="12" fill="#DC3545" />
        </svg>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="profile-icon">
          <circle cx="12" cy="12" r="12" fill="#28A745" />
        </svg>
        <span className="me-2">{projectData.team.team_members.length}</span>
        <button className="btn btn-primary" onClick={() => projectDetails(prev => prev === "team" ? "default" : "team")}>+</button>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
