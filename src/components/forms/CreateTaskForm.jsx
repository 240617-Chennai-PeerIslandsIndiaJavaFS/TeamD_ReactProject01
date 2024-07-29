import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';

const CreateTaskForm = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        userId: ''
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                if (Array.isArray(response.data)) {
                    setUsers(response.data);
                } else {
                    console.error('Expected an array of users, got:', response.data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/tasks', task);
            console.log('Task created:', response.data);
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>Create Task</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={task.title}
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
                        value={task.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Assign To</label>
                    <select
                        className="form-select"
                        id="userId"
                        name="userId"
                        value={task.userId}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select User</option>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))
                        ) : (
                            <option value="" disabled>Loading users...</option>
                        )}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Create Task</button>
            </form>
        </div>
    );
};

export default CreateTaskForm;
