import React, { useState, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './Column';
import './TaskBoard.css';
import { userContext } from '../Context/UserContextComponent';
import { useContext } from 'react';
import axios from 'axios';

const TaskBoard = ({ project }) => {
    const { userDetail, setUserDetail, projects, setProjects } = useContext(userContext);
    const [tasks, setTasks] = useState(null); // Initialize tasks as null
    const [columns, setColumns] = useState(null); // Initialize columns as null

    useEffect(() => {
        const fetchTasks = () => {
            axios.get(`http://localhost:8080/api/tasks/project/${projects[project].projectId}`)
                .then((response) => {
                    setTasks(response.data);
                })
                .catch((error) => {
                    console.log("Error fetching tasks", error);
                });
        };

        fetchTasks();
    }, [projects, project]);

    useEffect(() => {
        if (tasks) {
            const categorizedTasks = categorizeTasks(tasks);
            const initialColumns = {
                'IN_QUEUE': { id: 'IN_QUEUE', title: 'In Queue', taskIds: categorizedTasks['in_queue'].map(task => task.taskId.toString()) },
                'COMMENECED': { id: 'COMMENCED', title: 'Commenced', taskIds: categorizedTasks['commenced'].map(task => task.taskId.toString()) },
                'TESTING': { id: 'TESTING', title: 'Testing', taskIds: categorizedTasks['testing'].map(task => task.taskId.toString()) },
                'IN_REVIEW': { id: 'IN_REVIEW', title: 'In Review', taskIds: categorizedTasks['in_review'].map(task => task.taskId.toString()) },
                'BLOCKED': { id: 'BLOCKED', title: 'Blocked', taskIds: categorizedTasks['blocked'].map(task => task.taskId.toString()) },
                'MERGED': { id: 'MERGED', title: 'Merged', taskIds: categorizedTasks['merged'].map(task => task.taskId.toString()) },
                'CLOSED': { id: 'CLOSED', title: 'Closed', taskIds: categorizedTasks['closed'].map(task => task.taskId.toString()) },
            };
            setColumns(initialColumns);
        }
    }, [tasks]);

    const categorizeTasks = (tasks) => {
        const categorizedTasks = {
            'in_queue': [],
            'commenced': [],
            'testing': [],
           'in_review': [],
            'blocked': [],
            'merged': [],
            'closed': [] 
        };

        tasks.forEach((task) => {
            const lastMilestone = task.current_status.toLowerCase();
            categorizedTasks[lastMilestone]?.push(task);
        });

        return categorizedTasks;
    };

    const onDragEnd = (result) => {
        console.log(result);
        
        const { destination, source, draggableId } = result;
        if (!destination) return;

        if (destination.droppableId === source.droppableId) {
            const column = columns[source.droppableId];
            const newTaskIds = Array.from(column.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const updatedColumn = {
                ...column,
                taskIds: newTaskIds,
            };

            setColumns({
                ...columns,
                [source.droppableId]: updatedColumn,
            });
        } else {
            const startColumn = columns[source.droppableId];
            const finishColumn = columns[destination.droppableId];

            const startTaskIds = Array.from(startColumn.taskIds);
            startTaskIds.splice(source.index, 1);

            const finishTaskIds = Array.from(finishColumn.taskIds);
            finishTaskIds.splice(destination.index, 0, draggableId);

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...startColumn,
                    taskIds: startTaskIds,
                },
                [destination.droppableId]: {
                    ...finishColumn,
                    taskIds: finishTaskIds,
                },
            });
        }
    };

    // Ensure the component only renders when tasks and columns are available
    if (!tasks || !columns) {
        return <div>Loading...</div>;
    }

    return (
        <div className="task-board">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="columns-container">
                    {Object.keys(columns).map((columnId) => {
                        const column = columns[columnId];
                        const columnTasks = column.taskIds.map(
                            (taskId) => tasks.find((task) => task.taskId.toString() === taskId)
                        );

                        return (
                            <Column
                                key={column.id}
                                columnId={column.id}
                                columnTitle={column.title}
                                tasks={columnTasks}
                            />
                        );
                    })}
                </div>
            </DragDropContext>
        </div>
    );
};

export default TaskBoard;
