import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const CreateMessageForm = () => {
    const [message, setMessage] = useState({
        subject: '',
        messageBody: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMessage({ ...message, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/messages', message);
            console.log('Message sent:', response.data);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="form">
                <h2>Create Message</h2>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={message.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="messageBody" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="messageBody"
                        name="messageBody"
                        rows="5" /* Specify rows for the textarea */
                        value={message.messageBody}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    );
};

export default CreateMessageForm;
