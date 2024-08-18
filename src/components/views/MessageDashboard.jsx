import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './GeneralStyles.css'; // Import your custom CSS
import CreateMessageForm from '../forms/CreateMessageForm'; // Import from forms folder
import Inbox from './Inbox'; // Import from views folder
import Sent from './Sent'; // Import from views folder

const MessageDashboard = () => {
  const [view, setView] = useState('compose'); // Initial view

  const renderView = () => {
    switch (view) {
      case 'compose':
        return <CreateMessageForm />;
      case 'inbox':
        return <Inbox />;
      case 'sent':
        return <Sent />;
      default:
        return <CreateMessageForm />;
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Messages Dashboard</h1>
      <div className="text-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => setView('compose')}>Compose</button>
        <button className="btn btn-primary mx-2" onClick={() => setView('inbox')}>Inbox</button>
        <button className="btn btn-primary mx-2" onClick={() => setView('sent')}>Sent</button>
      </div>
      <div className="section">
        {renderView()}
      </div>
    </div>
  );
};

export default MessageDashboard;
