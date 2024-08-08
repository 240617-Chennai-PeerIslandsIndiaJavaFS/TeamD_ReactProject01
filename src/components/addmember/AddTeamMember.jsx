import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResetButton from '../buttons/ResetButton'; 
import './AddTeamMember.css';

const AddTeamMember = ({ project }) => {
    // Predefined users
    const initialUsers = [
        { user_id: 3, user_name: "User 3" },
        { user_id: 4, user_name: "User 4" },
        { user_id: 5, user_name: "User 5" },
        { user_id: 6, user_name: "User 6" }
    ];
    console.log(project.team.team_members);
    

    const [members, setMembers] = useState(project.team.team_members);
    const [newMemberName, setNewMemberName] = useState('');
    const [showAddForm, setShowAddForm] = useState(false);

    const handleAddMember = () => {
        if (newMemberName.trim() !== '') {
            const newMemberObj = {
                user_id: members.length + 1, // Simplified ID generation
                user_name: newMemberName,
                user_role: 'ASSOCIATE',
                email: '', // Placeholder
                phone: '',
                status: 'Active'
            };
            setMembers([...members, newMemberObj]);
            setNewMemberName('');
            setShowAddForm(false); // Hide the form after adding a member
        }
    };

    const handleChatClick = (userName) => {
        alert(`Sending message to ${userName}`);
    };

    const handleShowAddForm = () => {
        setShowAddForm(true);
    };

    return (
        <div className="team-container">
            <h3>Team Members</h3>
            <ul className="team-list">
                {/* Display Manager */}
                {project?.manager?.user_name && (
                    <li key={project.manager.user_id} className="team-item">
                        <span>{project.manager.user_name}</span>
                        <button className='btn btn-primary' onClick={() => handleChatClick(project.manager.user_name)} value="Chat">Chat</button>
                    </li>
                )}

                {/* Display predefined team members */}
                {members.map(member => (
                    <li key={member.user_id} className="team-item">
                        <span>{member.user_name}</span>
                        <ResetButton onClick={() => handleChatClick(member.user_name)} value="Chat" />
                    </li>
                ))}

                {/* Display "Add Member" button */}
                <li className="add-member-item">
                    <ResetButton onClick={handleShowAddForm} value="Add Member" />
                </li>
            </ul>

            {/* Add Member Form */}
            {showAddForm && (
                <div className="add-member-form">
                    <input
                        type="text"
                        placeholder="Enter new member name"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                    />
                    <ResetButton onClick={handleAddMember} value="Add Member" />
                </div>
            )}
        </div>
    );
};

AddTeamMember.propTypes = {
    project: PropTypes.shape({
        project_name: PropTypes.string,
        manager: PropTypes.shape({
            user_id: PropTypes.number,
            user_name: PropTypes.string,
        }),
    }).isRequired,
};

export default AddTeamMember;
