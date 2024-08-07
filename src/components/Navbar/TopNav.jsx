import React, { useState } from 'react'
import { userContext } from '../Context/UserContextComponent';
import { useContext } from 'react';

export const TopNav = ({options,project,adminContext}) => {
  const { userDetail, setUserDetail, projects, setProjects} = useContext(userContext);
  let count=0;

  // Data from context
 
  // Data from context
  
  return (
    <div>
    <nav class="top-nav navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    {/* {console.log(options)} */}
    {options=="user"?(
        <>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("createUser")}}>Create User</button>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("updateUser")}}>Update User</button>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("viewUser")}}>View Users</button>
        </>
    ):options=="project"?
    (
        <>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("createProject")}}>Create Project</button>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("updateProject")}}>Update Project</button>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("viewProject")}}>View Projects</button>
        </>
    ):options=="client"?(
        <>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("createClient")}}>Create Client</button>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("updateClient")}}>Update Client</button>
            <button class="btn btn-outline-success me-2" type="button" onClick={()=>{adminContext("viewClient")}}>View Clients</button>
        </>
    )
    :options=="viewProjects"?(
      <>
  {projects.map((data, index) => {
    return (
        <button
            key={index}
            className="btn btn-outline-warning me-2"
            type="button"
            onClick={() => adminContext(index)}
        >
            {data.project_name}
        </button>
    );
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
