// src/pages/HomePage.js
import React from 'react';
import './LandingPage.css';
import logo from '../../images/logo.png'; // Adjust paths if needed
import humanImage from '../../images/homeimage.png'; // Adjust paths if needed

const LandingPage = () => {
    const handleButtonClick = () => {
        console.log('Get Started button clicked!');
    };

    return (
        <div className="home-container">
            <div className="navbar">
                <span className="navbar-title">REV TASK MANAGEMENT</span>
            </div>
            <div className="logo-section">
                <img src={logo} alt="logo" id="logo" />
                <h2 className="title">REVTASK MANAGEMENT SOFTWARE</h2>
                <p className="description">
                    RevTaskManagement streamlines task organization and enhances productivity for work and personal tasks. It offers efficient task delegation and built-in effort estimation to help users plan and manage tasks effectively.
                </p>
                <button className="start-button" onClick={handleButtonClick}>Get Started</button>
            </div>
            <div className="image-section">
                <img src={humanImage} alt="Human Illustration" />
            </div>
        </div>
    );
};

export default LandingPage;
