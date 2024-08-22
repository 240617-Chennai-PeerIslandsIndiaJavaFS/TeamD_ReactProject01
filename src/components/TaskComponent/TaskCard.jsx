import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import './TaskCard.css';
import TaskDisplayComponent from './../taskdisplay/TaskDisplayComponent';

const TaskCard = ({ task, index ,openModal}) => {
    const { taskId, taskName, description, assignees } = task;
    const handleDoubleClick = () => {
        openModal(<TaskDisplayComponent taskid={taskId} />);
    };
    
    return (
        <Draggable draggableId={taskId.toString()} index={index}>
            {(provided) => (
                <div
                    className="task-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onDoubleClick={handleDoubleClick}
                >
                    <div className="card-body">
                        <div className="task-header">
                            <h6 className="card-title">{taskName}</h6>
                        </div>
                        <div className="task-body">{description}</div>
                        <div className="task-footer">
                            <span>{assignees.length} assignees</span>
                        </div>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TaskCard;
