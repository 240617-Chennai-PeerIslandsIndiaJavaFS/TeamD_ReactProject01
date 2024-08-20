import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import './TaskCard.css';

const TaskCard = ({ task, index }) => {
    const { taskId, taskName, description, assignees } = task;
    
    return (
        <Draggable draggableId={taskId.toString()} index={index}>
            {(provided) => (
                <div
                    className="task-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="card-body">
                        <div className="task-header">
                            <h6 className="card-title">{taskName}</h6>
                        </div>
                        <div className="task-body">{description}</div>
                        <div className="task-footer">
                            {/* <span>{commentsCount} comments</span> */}
                            {/* <span>{assignee.user_name}</span> */}
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;
