import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';
import './Column.css';

const Column = ({ columnId, columnTitle, tasks }) => {
    return (
        <div className="column">
            <h2 className='milestone-header'>{columnTitle}</h2>
            <Droppable droppableId={columnId}>
                {(provided) => (
                    <div
                        className="task-list"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <TaskCard
                                key={task.task_id}
                                task={task}
                                index={index}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;

