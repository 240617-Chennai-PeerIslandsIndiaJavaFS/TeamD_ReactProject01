import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_role: '',
    email: '',
    password: '',
    phone: '',
    manager_id: '',
    status: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="user_name">User Name</label>
          <input
            type="text"
            className="form-control"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_role">User Role</label>
          <input
            type="text"
            className="form-control"
            id="user_role"
            name="user_role"
            value={formData.user_role}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="manager_id">Manager ID</label>
          <input
            type="text"
            className="form-control"
            id="manager_id"
            name="manager_id"
            value={formData.manager_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
