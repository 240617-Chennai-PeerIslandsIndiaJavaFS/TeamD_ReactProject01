import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css'; // Import your custom CSS

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_role: '',
    email: '',
    phone: '',
    date_of_joining: '',
    skills: [],
    other_skill: '',
    showOtherSkillInput: false
  });

  const skillsOptions = [
    'Python', 'Java', 'SQL', 'JavaScript', 'HTML', 'CSS', 'React', 'Angular',
    'Node.js', 'C++', 'C#', 'Ruby', 'Go', 'Kotlin', 'Swift', 'PHP', 'Django',
    'Spring', 'Docker', 'Kubernetes', 'Others'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSkillSelect = (skill) => {
    if (skill === 'Others') {
      setFormData(prevState => ({
        ...prevState,
        showOtherSkillInput: true
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        skills: prevState.skills.includes(skill)
          ? prevState.skills.filter(s => s !== skill)
          : [...prevState.skills, skill],
        showOtherSkillInput: false
      }));
    }
  };

  const handleOtherSkillSubmit = () => {
    if (formData.other_skill) {
      setFormData(prevState => ({
        ...prevState,
        skills: [...prevState.skills, formData.other_skill],
        other_skill: '',
        showOtherSkillInput: false
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      skills: formData.skills
    };
    try {
      const response = await axios.post('http://localhost:3001/users', dataToSubmit);
      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="form">
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
                <select
                  className="form-control"
                  id="user_role"
                  name="user_role"
                  value={formData.user_role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Associate">Associate</option>
                </select>
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
                <label htmlFor="date_of_joining">Date of Joining</label>
                <input
                  type="date"
                  className="form-control"
                  id="date_of_joining"
                  name="date_of_joining"
                  value={formData.date_of_joining}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="skills">Skills</label>
                <select
                  id="skills"
                  className="form-control"
                  onChange={(e) => handleSkillSelect(e.target.value)}
                  value=""
                >
                  <option value="">Select Skills</option>
                  {skillsOptions.map(skill => (
                    <option key={skill} value={skill}>
                      {skill}
                    </option>
                  ))}
                </select>
                <div className="mt-2">
                  {formData.skills.length > 0 && (
                    <div>
                      <strong>Selected Skills:</strong>
                      <ul>
                        {formData.skills.map(skill => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {formData.showOtherSkillInput && (
                  <div className="other-skill-container">
                    <input
                      type="text"
                      className="form-control"
                      id="other_skill"
                      name="other_skill"
                      value={formData.other_skill}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="btn btn-primary add-button" // Apply custom CSS class
                      onClick={handleOtherSkillSubmit}
                    >
                      Add
                    </button>
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-sm" style={{ width: '50%' }}>Create User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
