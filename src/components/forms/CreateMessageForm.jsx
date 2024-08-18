import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Form.css'; // Import the CSS from forms folder

const CreateMessageForm = () => {
  const [subject, setSubject] = useState('');
  const [context, setContext] = useState(''); // Changed from description to context
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/messages/create', {
        subject,
        context,
        sender: { employeeId: senderId },
        receiver: { employeeId: receiverId }
      });
      setSuccess('Message sent successfully');
      setSubject('');
      setContext('');
      setSenderId('');
      setReceiverId('');
    } catch (err) {
      setError('Error sending message');
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Compose Message</h2>
      {error && <div className="error mb-4">{error}</div>}
      {success && <div className="success mb-4">{success}</div>}
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <input
              type="text"
              id="subject"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="Enter subject"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="context" className="form-label">Context:</label>
            <textarea
              id="context"
              className="form-control"
              value={context}
              onChange={(e) => setContext(e.target.value)}
              required
              placeholder="Enter context"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="senderId" className="form-label">Sender ID:</label>
            <input
              type="number"
              id="senderId"
              className="form-control"
              value={senderId}
              onChange={(e) => setSenderId(e.target.value)}
              required
              placeholder="Enter sender ID"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="receiverId" className="form-label">Receiver ID:</label>
            <input
              type="number"
              id="receiverId"
              className="form-control"
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
              required
              placeholder="Enter receiver ID"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMessageForm;
