import { click } from '@testing-library/user-event/dist/click';
import React from 'react'

export const LeftNav = ({user,navigateOptions}) => {
    const role=user.user_role;

    const userSelect=(e)=>{
        e.preventDefault();
        navigateOptions({
            "project":false,
            "user":true,
            "client":false
        })
    }
    const managerSelect=(e)=>{
        e.preventDefault();
        navigateOptions({
            "project":true,
            "user":false,
            "client":false
        }
        )
    }
    const assocaiteSelect=(e)=>{
        e.preventDefault();
        navigateOptions({
            "project":false,
            "user":false,
            "client":true
    })
    }
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-start">
    {role==="ADMIN"?( <>
        <button class="btn btn-outline-success me-2" type="button" onClick={userSelect}>User Management</button>
        <button class="btn btn-outline-success me-2" type="button" onClick={managerSelect}>Project Management</button>
        <button class="btn btn-outline-success me-2" type="button" onClick={assocaiteSelect}>Client Management</button>
        </>
):role==="MANAGER"?console.log("manager"):console.log("assocate")}
  </form>
</nav>
    </div>
  )
}
