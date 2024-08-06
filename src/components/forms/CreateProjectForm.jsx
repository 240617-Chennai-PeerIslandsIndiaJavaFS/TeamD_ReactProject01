import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';

const CreateProjectForm = () => {
    const [project, setProject] = useState({
        name: '',
        description: '',
        clientId: ''
    });
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:3001/clients');
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };
        fetchClients();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/projects', project);
            console.log('Project created:', response.data);
            alert("Project Created successfully")
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>Create Project</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={project.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        value={project.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="clientId" className="form-label">Client</label>
                    <select
                        className="form-select"
                        id="clientId"
                        name="clientId"
                        value={project.clientId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Client</option>
                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.company_name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Create Project</button>
            </form>
        </div>
    );
};

export default CreateProjectForm;
