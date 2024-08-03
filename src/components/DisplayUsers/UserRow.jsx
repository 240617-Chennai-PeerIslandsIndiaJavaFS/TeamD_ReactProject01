import React from 'react';
import './UserRow.css';

function UserRow({ user }) {
    const { user_name, user_role, email, phone, status } = user;
    return (
        <div className="user-row">
            <div className="user-info">
                <h6>{user_name}</h6>
                <p>{user_role}</p>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <div className="user-status">
                <span className={`status ${status.toLowerCase()}`}>{status}</span>
            </div>
        </div>
    );
}

export default UserRow;
