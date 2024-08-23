import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../Context/UserContextComponent';

const CreateMessageForm = () => {
  const [subject, setSubject] = useState('');
  const [context, setContext] = useState('');
  const [employees, setEmployees] = useState([]);
  const [selectedReceiverId, setSelectedReceiverId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { userDetail, projects } = useContext(userContext);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/employee');
        setEmployees(response.data.data);
      } catch (error) {
        console.error('Error fetching employees', error);
        setError('Failed to fetch employee names.');
      }
    };

    fetchEmployees();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedReceiverId === null) {
      setError('Please select a receiver.');
      return;
    }

    const messageData = {
      subject: subject,
      context: context,
      sender: { employeeId: userDetail.employeeId},
      receiver: { employeeId: selectedReceiverId }
    };

    try {
      const response = await axios.post('http://localhost:8080/api/messages/create', messageData);
      setSuccess('Message sent successfully!');
      setError('');
    } catch (error) {
      console.error('Error creating message', error);
      setError('Failed to send message.');
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
      <h2>Create Message</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Context:</label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Receiver:</label>
          <select
            value={selectedReceiverId || ''}
            onChange={(e) => setSelectedReceiverId(Number(e.target.value))}
            required
          >
            <option value="" disabled>Select employee</option>
            {employees.map((employee) => (
              <option key={employee.employeeId} value={employee.employeeId}>
                {employee.employeeName}
              </option>
            ))}
          </select>
        </div>
        <div className="button-container">
          <button type="submit">Send Message</button>
        </div>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateMessageForm;