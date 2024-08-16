import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientRow from './ClientRow';
import './DisplayClients.css';

function DisplayClients() {
    const [clients, setClients] = useState([]);

    const fetchClients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/clients');
            setClients(response.data.data);
        } catch (error) {
            console.error('Error fetching clients:', error);
        }
    };

   useEffect(()=>{
    fetchClients()
   },[])

    return (
        <>
            <div>
               
                    <div className="clients-container">
                        {Array.isArray(clients) && clients.length > 0 ? (
                            clients.map((client) => <ClientRow key={client.clientId} client={client} />)
                        ) : (
                            <p>No clients available.</p>
                        )}
                    </div>
              
            </div>
        </>
    );
}

export default DisplayClients;
