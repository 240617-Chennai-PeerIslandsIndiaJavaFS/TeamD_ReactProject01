import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserRow from './UserRow';
import './DisplayUser.css';

function DisplayUser() {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:3001/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const toggleDisplay = () => {
        setShow(!show);
        if (!show) fetchUsers();
    };

    return (
        <>
            <button onClick={toggleDisplay} className="display-user-button">Display User</button>
            <div>
                {show && (
                    <div className="users-container ">
                        {Array.isArray(users) && users.length > 0 ? (
                            users.map((user) => <UserRow key={user.user_id} user={user} />)
                        ) : (
                            <p>No users available.</p>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default DisplayUser;
