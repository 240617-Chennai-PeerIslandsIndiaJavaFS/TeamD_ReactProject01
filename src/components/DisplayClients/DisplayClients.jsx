import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientRow from './ClientRow';
import './DisplayClients.css';

function DisplayClients() {
    const [clients, setClients] = useState([]);
    const [show, setShow] = useState(false);

    const fetchClients = async () => {
        try {
            const response = await axios.get('http://localhost:3001/clients');
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

    const toggleDisplay = () => {
        setShow(!show);
        if (!show) fetchClients();
    };

    return (
        <>
            <button onClick={toggleDisplay} className="display-client-button">Display Clients</button>
            <div>
                {show && (
                    <div className="clients-container">
                        {Array.isArray(clients) && clients.length > 0 ? (
                            clients.map((client) => <ClientRow key={client.client_id} client={client} />)
                        ) : (
                            <p>No clients available.</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default DisplayClients;
