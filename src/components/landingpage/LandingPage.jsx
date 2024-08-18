import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandingPage.css';
import logo from '../../images/logo.png'; // Adjust paths if needed
import humanImage from '../../images/homeimage.png'; // Adjust paths if needed
import ResetButton from '../buttons/ResetButton'; // Adjust path if needed

const LandingPage = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/clients');
                const clientData = response.data.data;
                if (Array.isArray(clientData)) {
                    setClients(clientData);
                } else {
                    setError('Unexpected data format');
                }
            } catch (error) {
                console.error('Error fetching clients:', error);
                setError('Error fetching clients');
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    const handleButtonClick = () => {
        console.log('Get Started button clicked!');
    };

    return (
        <div className="landing-container">
            <nav className="landing navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <a className="navbar-brand" href="#">REV TASK MANAGEMENT</a>
            </nav>
            <div className="container mt-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-left">
                        <img src={logo} alt="logo" id="logo" className="img-fluid mb-3" />
                        <h2 className="title">REVTASK MANAGEMENT SOFTWARE</h2>
                        <p className="description">
                            RevTaskManagement streamlines task organization and enhances productivity for work and personal tasks. It offers efficient task delegation and built-in effort estimation to help users plan and manage tasks effectively.
                        </p>
                        <ResetButton onClick={handleButtonClick} value="Get Started" />
                    </div>
                    <div className="col-lg-6 text-center">
                        <img src={humanImage} alt="Human Illustration" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <h2 className="about-title">About Our Application</h2>
                <p className="about-description">
                    RevTaskManagement is designed to make your task management easier and more efficient. With our application, you can:
                </p>
                <ul className="about-points list-unstyled">
                    <li className="shadow-sm p-3 mb-4 bg-light rounded">Efficiently manage tasks across multiple projects.</li>
                    <li className="shadow-sm p-3 mb-4 bg-light rounded">Track milestones and deadlines with ease.</li>
                    <li className="shadow-sm p-3 mb-4 bg-light rounded">Delegate tasks effectively to team members.</li>
                    <li className="shadow-sm p-3 mb-4 bg-light rounded">Utilize built-in effort estimation tools for better planning.</li>
                    <li className="shadow-sm p-3 mb-4 bg-light rounded">Maintain a high level of productivity with organized workflows.</li>
                </ul>
            </div>
            <div className="container mt-5">
                <h2 className="clients-title">Our Clients</h2>
                {loading && <p>Loading clients...</p>}
                {error && <p>{error}</p>}
                {!loading && !error && (
                    <div className="clients-box">
                        {clients.map(client => (
                            <div key={client.clientId} className="client-company-name">
                                {client.companyName}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <footer className="footer bg-primary text-white text-center py-3">
                <p>&copy; 2024 RevTaskManagement. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
