import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Sent = () => {
  const [sentMessages, setSentMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSentMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/messages/sender/8');
        setSentMessages(response.data.data || []);
      } catch (err) {
        setError('Error fetching sent messages');
        console.error(err);
      }
    };

    fetchSentMessages();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Sent Messages</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {Array.isArray(sentMessages) && sentMessages.length > 0 ? (
          sentMessages.map((message) => (
            <li key={message.messageId} className="list-group-item">
              <strong>Subject:</strong> {message.subject}<br />
              <strong>To:</strong> {message.receiver.employeeName}<br />
              <strong>Content:</strong> {message.context}
            </li>
          ))
        ) : (
          <p className="text-center">No sent messages found.</p>
        )}
      </ul>
    </div>
  );
};

export default Sent;
