import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Inbox = () => {
  const [inboxMessages, setInboxMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchInboxMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/messages/receiver/1');
        setInboxMessages(response.data.data || []);
      } catch (err) {
        setError('Error fetching inbox messages');
        console.error(err);
      }
    };

    fetchInboxMessages();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Inbox</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {Array.isArray(inboxMessages) && inboxMessages.length > 0 ? (
          inboxMessages.map((message) => (
            <li key={message.messageId} className="list-group-item">
              <strong>Subject:</strong> {message.subject}<br />
              <strong>From:</strong> {message.sender.employeeName}<br />
              <strong>Content:</strong> {message.context}
            </li>
          ))
        ) : (
          <p className="text-center">No messages found.</p>
        )}
      </ul>
    </div>
  );
};

export default Inbox;
