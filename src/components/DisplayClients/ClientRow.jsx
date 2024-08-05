import React from 'react';
import './ClientRow.css';

function ClientRow({ client }) {
    const { company_name, point_of_contact, contact_email, contact_number, address } = client;
    return (
        <div className="client-row">
            <div className="client-info">
                <h6>{company_name}</h6>
                <p>{point_of_contact}</p>
                <p>{contact_email}</p>
                <p>{contact_number}</p>
                <p>{address}</p>
            </div>
        </div>
    );
}

export default ClientRow;
