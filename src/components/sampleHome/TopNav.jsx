import React, { useState } from 'react'

export const TopNav = ({options}) => {
    const[navigations,setOptions]=useState(options)
  return (
    <div>
    <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    {console.log(options)}
    {options.user?(
        <>
            <button class="btn btn-outline-success me-2" type="button">Create User</button>
            <button class="btn btn-outline-success me-2" type="button">Update User</button>
            <button class="btn btn-outline-success me-2" type="button">View Users</button>
        </>
    ):options.project?
    (
        <>
            <button class="btn btn-outline-success me-2" type="button">Create Project</button>
            <button class="btn btn-outline-success me-2" type="button">Update Project</button>
            <button class="btn btn-outline-success me-2" type="button">View Projects</button>
        </>
    ):options.client?(
        <>
            <button class="btn btn-outline-success me-2" type="button">Create Client</button>
            <button class="btn btn-outline-success me-2" type="button">Update Client</button>
            <button class="btn btn-outline-success me-2" type="button">View Clients</button>
        </>
    )
    :(
      <p>Welcome to Rev tak management system</p>
    )
}
  </form>
</nav>
    </div>
  )
}
