import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'; // Import your custom CSS

const TaskForm = () => {
  const [formData, setFormData] = useState({
    task_name: '',
    task_desc: '',
    start_date: '',
    end_date: '',
    assigned_users: [],
    user_dropdown: ''
  });

  const allUsers = [
    'User 1', 'User 2', 'User 3', 'User 4', 'User 5',
    'User 6', 'User 7', 'User 8', 'User 9', 'User 10',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUserSelect = (user) => {
    setFormData(prevState => {
      const isUserSelected = prevState.assigned_users.includes(user);
      return {
        ...prevState,
        assigned_users: isUserSelected
          ? prevState.assigned_users.filter(u => u !== user)
          : [...prevState.assigned_users, user],
        user_dropdown: ''
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      assigned_users: formData.assigned_users
    };
    try {
      const response = await axios.post('http://localhost:3001/tasks', dataToSubmit);
      console.log('Task created successfully:', response.data);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="form">
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="task_name">Task Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="task_name"
                  name="task_name"
                  value={formData.task_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="task_desc">Task Description</label>
                <textarea
                  className="form-control"
                  id="task_desc"
                  name="task_desc"
                  value={formData.task_desc}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="start_date">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="start_date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="end_date">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="end_date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="assigned_users">Assign Users</label>
                <div className="d-flex">
                  <select
                    id="user_dropdown"
                    className="form-control"
                    value={formData.user_dropdown}
                    onChange={(e) => handleUserSelect(e.target.value)}
                  >
                    <option value="">Select User</option>
                    {allUsers.map(user => (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2">
                  {formData.assigned_users.length > 0 && (
                    <div>
                      <strong>Selected Users:</strong>
                      <ul>
                        {formData.assigned_users.map(user => (
                          <li key={user}>{user}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-sm" style={{ width: '50%' }}>Create Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
