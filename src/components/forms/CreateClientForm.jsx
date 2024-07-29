import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const CreateClientForm = () => {
    const [client, setClient] = useState({
        company_name: '',
        point_of_contact: '',
        contact_email: '',
        contact_number: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/clients', client);
            console.log('Client created:', response.data);
        } catch (error) {
            console.error('Error creating client:', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>Create Client</h2>
                <div className="mb-3">
                    <label htmlFor="company_name" className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="company_name"
                        name="company_name"
                        value={client.company_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="point_of_contact" className="form-label">Point of Contact</label>
                    <input
                        type="text"
                        className="form-control"
                        id="point_of_contact"
                        name="point_of_contact"
                        value={client.point_of_contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact_email" className="form-label">Contact Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="contact_email"
                        name="contact_email"
                        value={client.contact_email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact_number" className="form-label">Contact Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="contact_number"
                        name="contact_number"
                        value={client.contact_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={client.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Client</button>
            </form>
        </div>
    );
};

export default CreateClientForm;
