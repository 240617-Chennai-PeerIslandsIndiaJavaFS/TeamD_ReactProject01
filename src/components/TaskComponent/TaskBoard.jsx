import React, { useState, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import Column from './Column';
import './TaskBoard.css';

const TaskBoard = () => {
  const projects = [
    {
      "project_id": 1,
      "project_name": "Tutee Deets",
      "project_description":"Student management system",
      "client":{"client_id": 1,
      "company_name": "Tech Solutions Inc.",
      "point_of_contact": "John Doe",
      "contact_email": "johndoe@techsolutions.com",
      "contact_number": "+1-555-123-4567",
      "address": "1234 Elm Street, Springfield, IL, 62701, USA"},
      "manager": {
        "user_id": 2,
        "user_name": "User 2",
        "user_role": "MANAGER",
        "email": "manager@gmail.com",
        "password": "Manager@123", 
        "phone": "+1-555-123-4562",
        "manager_id": null,
        "status": "Inactive"
      },
      "team": {
        "team_id": 1,
        "team_name": "alpha",
        "team_members": [
          {
            "user_id": 3,
            "user_name": "User 3",
            "user_role": "ASSOCIATE",
            "email": "associate1@gmail.com",
            "password": "Associate@123", 
            "phone": "+1-555-123-4563",
            "manager_id": null,
            "status": "Active"
          },
          {
            "user_id": 4,
            "user_name": "User 4",
            "user_role": "ASSOCIATE",
            "email": "associate2@gmail.com",
            "password": "password4", 
            "phone": "+1-555-123-4564",
            "manager_id": null,
            "status": "Inactive"
          },
          {
            "user_id": 5,
            "user_name": "User 5",
            "user_role": "ASSOCIATE",
            "email": "user5@example.com",
            "password": "password5", 
            "phone": "+1-555-123-4565",
            "manager_id": null,
            "status": "Active"
          },
          {
            "user_id": 6,
            "user_name": "User 6",
            "user_role": "ASSOCIATE",
            "email": "user6@example.com",
            "password": "password6", 
            "phone": "+1-555-123-4566",
            "manager_id": 2, 
            "status": "Active"
          }
        ]
      },
      "tasks":[
        {"task_id":1,
          "task_name":"create login page",
          "task_description":"Create responsive login page as per  design",
          "assignee":{"user_id": 3,
      "user_name": "User 3",
      "user_role": "ASSOCIATE",
      "email": "associate1@gmail.com",
      "password": "Associate@123", 
      "phone": "+1-555-123-4563",
      "manager_id": null,
      "status": "Active"},
          "milestonse":"Merged",
          "startDate":"21-07-2024",
          "endDate":"25-07-2024",
          "timeline":[{
      "timestamp_id":1,
      "milestone":"In Queue",
      "comment":"new task assigned. Start it ASAP"
    },
     {
      "timestamp_id":2,
      "milestone":"Commenced",
      "comment":"Started task"
    },
     {
      "timestamp_id":3,
      "milestone":"Testing",
      "comment":"Testig task"
    },
       {
      "timestamp_id":4,
      "milestone":"In review",
      "comment":"waiting for manager approval"
    },
       {
      "timestamp_id":5,
      "milestone":"Merged",
      "comment":"merged my branch in github"
    }]
        },
        {"task_id":2,
          "task_name":"create user api's ",
          "task_description":"Create crud api's",
          "assignee":{  "user_id": 3,
      "user_name": "User 3",
      "user_role": "ASSOCIATE",
      "email": "associate1@gmail.com",
      "password": "Associate@123", 
      "phone": "+1-555-123-4563",
      "manager_id": null,
      "status": "Active"},
          "milestonse":"IN QUEUE",
          "startDate":"21-07-2024",
          "endDate":"25-07-2024",
          "timeline":[{
      "timestamp_id":1,
      "milestone":"In Queue",
      "comment":"new task assigned. Start it ASAP"
    }]
        }
        ]
    }
        ]
    const categorizeTasks = (tasks) => {
        const categorizedTasks = {
            'In Queue': [],
            'Commenced': [],
            'Implemented': [],
            'Testing': [],
            'In Review': [],
            'Merged': [],
        };

        tasks.forEach((task) => {
            const lastMilestone = task.timeline[task.timeline.length - 1].milestone;
            if (categorizedTasks[lastMilestone]) {
                categorizedTasks[lastMilestone].push(task);
            }
        });

        return categorizedTasks;

    };

    const tasks = projects.flatMap((project) => project.tasks);
    // console.log(tasks);
    const categorizedTasks = categorizeTasks(tasks);
    console.log(categorizedTasks);

    const initialColumns = {
        'column-1': { id: 'column-1', title: 'In Queue', taskIds: categorizedTasks['In Queue'].map(task => task.task_id.toString()) },
        'column-2': { id: 'column-2', title: 'Commenced', taskIds: categorizedTasks['Commenced'].map(task => task.task_id.toString()) },
        'column-3': { id: 'column-3', title: 'Implemented', taskIds: categorizedTasks['Implemented'].map(task => task.task_id.toString()) },
        'column-4': { id: 'column-4', title: 'Testing', taskIds: categorizedTasks['Testing'].map(task => task.task_id.toString()) },
        'column-5': { id: 'column-5', title: 'In Review', taskIds: categorizedTasks['In Review'].map(task => task.task_id.toString()) },
        'column-6': { id: 'column-6', title: 'Merged', taskIds: categorizedTasks['Merged'].map(task => task.task_id.toString()) },
    };

    const [columns, setColumns] = useState(initialColumns);

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        // Check if destination is valid
        if (!destination) return;

        // Handle reordering of tasks within the same column
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
            // Handle moving tasks between columns
            const startColumn = columns[source.droppableId];
            const finishColumn = columns[destination.droppableId];

            // Remove task from the start column
            const startTaskIds = Array.from(startColumn.taskIds);
            startTaskIds.splice(source.index, 1);

            // Add task to the finish column
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

    return (
        <div className="task-board">
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="columns-container">
                    {Object.keys(columns).map((columnId) => {
                        const column = columns[columnId];
                        const columnTasks = column.taskIds.map(
                            (taskId) =>
                                tasks.find((task) => task.task_id.toString() === taskId)
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
