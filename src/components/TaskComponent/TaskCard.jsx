import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import './TaskCard.css';

const TaskCard = ({ task, index }) => {
    const { task_id, task_name, task_description, commentsCount, assignee } = task;
    
    return (
        <Draggable draggableId={task_id.toString()} index={index}>
            {(provided) => (
                <div
                    className="task-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="card-body">
                        <div className="task-header">
                            <h6 className="card-title">{task_name}</h6>
                        </div>
                        <div className="task-body">{task_description}</div>
                        <div className="task-footer">
                            <span>{commentsCount} comments</span>
                            <span>{assignee.user_name}</span>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;
