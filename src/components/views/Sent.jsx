import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useContext } from 'react';
import { userContext } from '../Context/UserContextComponent';
const Sent = () => {
  const { userDetail, projects } = useContext(userContext);
  const [sentMessages, setSentMessages] = useState([]);
  const [error, setError] = useState('');
  // alert(userDetail.employeeId)
  useEffect(() => {
    const fetchSentMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/messages/sender/${userDetail.employeeId}`);
        setSentMessages(response.data.data || []);
      } catch (err) {
        setError('No sent messages');
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
