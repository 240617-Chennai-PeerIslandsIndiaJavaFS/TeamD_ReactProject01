import React, { useState } from 'react'

export const TopNav = ({options,project}) => {
  // Data from context
  const projects=[
    {
      "project_id": 1,
      "project_name": "Tutee Deets",
      "project_description": "Student management system",
      "client": {
        "client_id": 1,
        "company_name": "Tech Solutions Inc.",
        "point_of_contact": "John Doe",
        "contact_email": "johndoe@techsolutions.com",
        "contact_number": "+1-555-123-4567",
        "address": "1234 Elm Street, Springfield, IL, 62701, USA"
      },
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
      "tasks": [
        {
          "task_id": 1,
          "task_name": "create login page",
          "task_description": "Create responsive login page as per design",
          "assignee": {
            "user_id": 3,
            "user_name": "User 3",
            "user_role": "ASSOCIATE",
            "email": "associate1@gmail.com",
            "password": "Associate@123",
            "phone": "+1-555-123-4563",
            "manager_id": null,
            "status": "Active"
          },
          "milestone": "MERGED",
          "start_date": "21-07-2024",
          "end_date": "25-07-2024",
          "timeline": [
            {
              "timestamp_id": 1,
              "milestone": "In Queue",
              "comment": "new task assigned. Start it ASAP"
            },
            {
              "timestamp_id": 2,
              "milestone": "Commenced",
              "comment": "Started task"
            },
            {
              "timestamp_id": 3,
              "milestone": "Testing",
              "comment": "Testing task"
            },
            {
              "timestamp_id": 4,
              "milestone": "In review",
              "comment": "waiting for manager approval"
            },
            {
              "timestamp_id": 5,
              "milestone": "merged",
              "comment": "merged my branch in github"
            }
          ]
        },
        {
          "task_id": 2,
          "task_name": "create user api's",
          "task_description": "Create CRUD API's",
          "assignee": {
            "user_id": 3,
            "user_name": "User 3",
            "user_role": "ASSOCIATE",
            "email": "associate1@gmail.com",
            "password": "Associate@123",
            "phone": "+1-555-123-4563",
            "manager_id": null,
            "status": "Active"
          },
          "milestone": "IN QUEUE",
          "start_date": "21-07-2024",
          "end_date": "25-07-2024",
          "timeline": [
            {
              "timestamp_id": 1,
              "milestone": "In Queue",
              "comment": "new task assigned. Start it ASAP"
            }
          ]
        }
      ],
      "status": "active"
    },
    {
      "project_id": 2,
      "project_name": "Rev Task Management",
      "project_description": "Task management system",
      "client": {
        "client_id": 1,
        "company_name": "Tech Solutions Inc.",
        "point_of_contact": "John Doe",
        "contact_email": "johndoe@techsolutions.com",
        "contact_number": "+1-555-123-4567",
        "address": "1234 Elm Street, Springfield, IL, 62701, USA"
      },
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
        "team_id": 2,
        "team_name": "theta",
        "team_members": [
          {
            "user_id": 7,
            "user_name": "User 7",
            "user_role": "ASSOCIATE",
            "email": "user7@example.com",
            "password": "password7",
            "phone": "+1-555-123-4567",
            "manager_id": 4,
            "status": "Inactive"
          },
          {
            "user_id": 8,
            "user_name": "User 8",
            "user_role": "ASSOCIATE",
            "email": "user8@example.com",
            "password": "password8",
            "phone": "+1-555-123-4568",
            "manager_id": 1,
            "status": "Active"
          }
        ]
      },
      "tasks": [
        {
          "task_id": 1,
          "task_name": "create home, login and forget password page",
          "task_description": "Create responsive page as per design",
          "assignee": {
            "user_id": 7,
            "user_name": "User 7",
            "user_role": "ASSOCIATE",
            "email": "associate7@gmail.com",
            "password": "Associate@123",
            "phone": "+1-555-123-4563",
            "manager_id": null,
            "status": "Active"
          },
          "milestone": "MERGED",
          "start_date": "21-07-2024",
          "end_date": "25-07-2024",
          "timeline": [
            {
              "timestamp_id": 1,
              "milestone": "In Queue",
              "comment": "new task assigned. Start it ASAP"
            },
            {
              "timestamp_id": 2,
              "milestone": "Commenced",
              "comment": "Started task"
            },
            {
              "timestamp_id": 3,
              "milestone": "Testing",
              "comment": "Testing task"
            },
            {
              "timestamp_id": 4,
              "milestone": "In review",
              "comment": "waiting for manager approval"
            },
            {
              "timestamp_id": 5,
              "milestone": "merged",
              "comment": "merged my branch in github"
            }
          ]
        },
        {
          "task_id": 2,
          "task_name": "create user api's",
          "task_description": "Create CRUD API's",
          "assignee": {
            "user_id": 8,
            "user_name": "User 8",
            "user_role": "ASSOCIATE",
            "email": "associate8@gmail.com",
            "password": "password8",
            "phone": "+1-555-123-4568",
            "manager_id": null,
            "status": "Inactive"
          },
          "milestone": "IN QUEUE",
          "start_date": "21-07-2024",
          "end_date": "25-07-2024",
          "timeline": [
            {
              "timestamp_id": 1,
              "milestone": "In Queue",
              "comment": "new task assigned. Start it ASAP"
            }
          ]
        }
      ],
      "status": "active"
    }
  ]
  // Data from context
  
  return (
    <div>
    <nav class="top-nav navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    {console.log(options)}
    {options=="user"?(
        <>
            <button class="btn btn-outline-success me-2" type="button">Create User</button>
            <button class="btn btn-outline-success me-2" type="button">Update User</button>
            <button class="btn btn-outline-success me-2" type="button">View Users</button>
        </>
    ):options=="project"?
    (
        <>
            <button class="btn btn-outline-success me-2" type="button">Create Project</button>
            <button class="btn btn-outline-success me-2" type="button">Update Project</button>
            <button class="btn btn-outline-success me-2" type="button">View Projects</button>
        </>
    ):options=="client"?(
        <>
            <button class="btn btn-outline-success me-2" type="button">Create Client</button>
            <button class="btn btn-outline-success me-2" type="button">Update Client</button>
            <button class="btn btn-outline-success me-2" type="button">View Clients</button>
        </>
    )
    :options=="viewProjects"?(
      <>
      {projects.map(data=>{
        return(
          <>
          <button class="btn btn-outline-warning me-2" type="button">{data.project_name}</button>
          </>
        )
})}
      </>
    ):(
      <p>Welcome to Rev Task Management System</p>
    )
}
  </form>
</nav>
    </div>
  )
}
