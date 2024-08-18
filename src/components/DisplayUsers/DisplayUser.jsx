import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserRow from './UserRow';
import './DisplayUser.css';

function DisplayUser({openModal}) {
    const [employees, setEmployees] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/employee');
            setEmployees(response.data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    useEffect(()=>{
        fetchUsers()
    },[])

    
    return (
        <>
            <div className='user-display-component'> 
                    <div className="users-container ">
                        {Array.isArray(employees) && employees.length > 0 ? (
                            employees.map((employee) => <UserRow key={employee.employeeId} employee={employee} openModal={openModal}/>)
                        ) : (
                            <p>No users available.</p>
                        )}
                    </div>
             </div>
        </>
    );
}

export default DisplayUser;
