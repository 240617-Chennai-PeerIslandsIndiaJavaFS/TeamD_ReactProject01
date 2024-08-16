import React, { useState } from 'react';
import ResetButton from '../buttons/ResetButton';
import './TaskDisplayComponent.css';

const TaskDisplayComponent = () => {
    const [task, setTask] = useState({
        taskName: "Task-Display-Component",
        taskDescription: "This task involves creating a React component to display task details, comments, and timeline events.",
        startDate: "2024-08-01",
        endDate: "2024-08-10"
    });

    const [sampleTimeline] = useState([
        { milestone: 'IN_QUEUE', timestamp: '2024-08-01 09:00:00' },
        { milestone: 'COMMENCED', timestamp: '2024-08-02 10:00:00' },
        { milestone: 'TESTING', timestamp: '2024-08-04 11:00:00' },
        { milestone: 'IN_REVIEW', timestamp: '2024-08-07 12:00:00' },
        { milestone: 'CLOSED', timestamp: '2024-08-10 13:00:00' },
    ]);

    const [comments, setComments] = useState([
        { comment: 'Initial setup for the task is complete.', type: 'update' },
        { comment: 'Testing phase has begun. Major bugs need to be fixed.', type: 'update' },
        { comment: 'Few bugs identified and fixed. Preparing for final testing.', type: 'feedback' },
    ]);

    const [newComment, setNewComment] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.taskDescription);
    const [editedStartDate, setEditedStartDate] = useState(task.startDate);
    const [editedEndDate, setEditedEndDate] = useState(task.endDate);

    const [members, setMembers] = useState([]);
    const [allEmployees] = useState(["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]);

    const addComment = () => {
        if (newComment.trim() !== '') {
            const newCommentData = { comment: newComment, type: 'user' };
            setComments([...comments, newCommentData]);
            setNewComment('');
        }
    };

    const deleteTask = () => {
        alert('Task Deleted');
    };

    const toggleEdit = () => {
        if (isEditing) {
            setTask({
                ...task,
                taskDescription: editedDescription,
                startDate: editedStartDate,
                endDate: editedEndDate
            });
        }
        setIsEditing(!isEditing);
    };

    const addMember = (member) => {
        if (member && !members.includes(member)) {
            setMembers([...members, member]);
        }
    };

    const removeMember = (member) => {
        setMembers(members.filter(m => m !== member));
    };

    return (
        <div className="task-container">
            <div className="task-header">
                <h3>{task.taskName}</h3>
            </div>
            <div className="task-details">
                <label>Description</label>
                {isEditing ? (
                    <textarea
                        className="edit-description"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                ) : (
                    <p>{task.taskDescription}</p>
                )}
                <div className="date-edit-section">
                    <div className="date-container">
                        <label>Start Date</label>
                        {isEditing ? (
                            <input
                                type="date"
                                value={editedStartDate}
                                onChange={(e) => setEditedStartDate(e.target.value)}
                            />
                        ) : (
                            <p>{task.startDate}</p>
                        )}
                    </div>
                    <div className="date-container">
                        <label>End Date</label>
                        {isEditing ? (
                            <input
                                type="date"
                                value={editedEndDate}
                                onChange={(e) => setEditedEndDate(e.target.value)}
                            />
                        ) : (
                            <p>{task.endDate}</p>
                        )}
                    </div>
                    <div className="edit-button-container">
                        <ResetButton onClick={toggleEdit} value={isEditing ? "Save" : "Edit"} />
                    </div>
                </div>
            </div>

            <div className="task-actions">
                <label>Add Member:</label>
                <select onChange={(e) => addMember(e.target.value)}>
                    <option value="">Select a member</option>
                    {allEmployees.map((employee, index) => (
                        <option key={index} value={employee}>
                            {employee}
                        </option>
                    ))}
                </select>
            </div>

            <div className="members-list">
                {members.map((member, index) => (
                    <div key={index} className="member-item">
                        {member}
                        <ResetButton onClick={() => removeMember(member)} value="Remove" />
                    </div>
                ))}
            </div>

            <div className="comments-section">
                <label>Comments</label>
                <div className="comment-input-container">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="comment-input"
                        placeholder="Write a comment..."
                    />
                    <ResetButton onClick={addComment} value="Add" />
                </div>
                <ul className="comment-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-item">
                            <strong>{comment.type.toUpperCase()}:</strong> {comment.comment}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="timeline-section">
                <label>Timeline</label>
                <ul className="timeline-list">
                    {sampleTimeline.map((event, index) => (
                        <li key={index} className="timeline-item">
                            <strong>{event.milestone}</strong> - {new Date(event.timestamp).toLocaleString()}
                        </li>
                    ))}
                </ul>
            </div>

            <ResetButton onClick={deleteTask} value="Delete Task" className="delete-button" />
        </div>
    );
};

export default TaskDisplayComponent;
