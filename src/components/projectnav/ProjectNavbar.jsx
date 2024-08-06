import React from 'react';
import ResetButton from '../buttons/ResetButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectNavbar1.css';

const projectData = {
  project_id: 1,
  project_name: "Tutee Deets",
  project_description: "Student management system",
  client: {
    client_id: 1,
    company_name: "Tech Solutions Inc.",
    point_of_contact: "John Doe",
    contact_email: "johndoe@techsolutions.com",
    contact_number: "+1-555-123-4567",
    address: "1234 Elm Street, Springfield, IL, 62701, USA"
  },
  manager: {
    user_id: 2,
    user_name: "User 2",
    user_role: "MANAGER",
    email: "manager@gmail.com",
    password: "Manager@123",
    phone: "+1-555-123-4562",
    manager_id: null,
    status: "Inactive"
  },
  team: {
    team_id: 1,
    team_name: "alpha",
    team_members: [
      {
        user_id: 3,
        user_name: "User 3",
        user_role: "ASSOCIATE",
        email: "associate1@gmail.com",
        password: "Associate@123",
        phone: "+1-555-123-4563",
        manager_id: null,
        status: "Active"
      },
      {
        user_id: 4,
        user_name: "User 4",
        user_role: "ASSOCIATE",
        email: "associate2@gmail.com",
        password: "password4",
        phone: "+1-555-123-4564",
        manager_id: null,
        status: "Inactive"
      },
      {
        user_id: 5,
        user_name: "User 5",
        user_role: "ASSOCIATE",
        email: "user5@example.com",
        password: "password5",
        phone: "+1-555-123-4565",
        manager_id: null,
        status: "Active"
      },
      {
        user_id: 6,
        user_name: "User 6",
        user_role: "ASSOCIATE",
        email: "user6@example.com",
        password: "password6",
        phone: "+1-555-123-4566",
        manager_id: 2,
        status: "Active"
      }
    ]
  }
};

const ProjectNavbar = () => {
  const handleDetailsClick = () => {
    alert(`Project Details: ${projectData.project_description}`);
  };

  const handleAddClick = () => {
    alert('Add functionality triggered');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <a className="navbar-brand d-flex align-items-center" href="#home">
        <span className="me-3">{projectData.project_name}</span>
      </a>
      <div className="navbar-nav me-auto">
        <ResetButton onClick={handleDetailsClick} value="Details" />
      </div>
      <div className="navbar-nav ms-auto d-flex align-items-center">
        {/* SVG Icons */}
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
        <button className="btn btn-primary" onClick={handleAddClick}>+</button>
      </div>
    </nav>
  );
};

export default ProjectNavbar;
