import React from 'react';
import './ClientRow.css';

function ClientRow({ client }) {
    const { companyName, pointOfContact, email, contact, address } = client;
    return (
        <div className="client-row">
            <div className="client-info">
                <h6>{companyName}</h6>
                <p>{pointOfContact}</p>
                <p>{email}</p>
                <p>{contact}</p>
                <p>{address}</p>
            </div>
        </div>
    );
}

export default ClientRow;
