import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Compose = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/messages/receiver/1');
        setMessages(response.data.data);
      } catch (err) {
        setError('Error fetching messages');
        console.error(err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Messages</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {messages.map((message) => (
          <li key={message.messageId} className="list-group-item">
            {message.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Compose;
