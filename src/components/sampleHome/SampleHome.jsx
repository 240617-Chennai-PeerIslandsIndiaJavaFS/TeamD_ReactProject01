import React, { useState } from 'react'
import { LeftNav } from './LeftNav';
import { TopNav } from './TopNav';

export const SampleHome = () => {
    const[user,setUser]=useState({
        "user_id": 1,
        "user_name": "User1",
        "user_role": "ADMIN",
        "email": "admin@gmail.com",
        "password": "Admin@123",
        "phone": "+1-555-123-4561",
        "manager_id": null,
        "status": "Active"
      });
    const[navigateOptions,setNavigate]=useState({
      "user":false,
      "client":false,
      "project":false
    })
  
  return (
    <div>
      <LeftNav user={user} navigateOptions={setNavigate}/>
      <TopNav options={navigateOptions}></TopNav>
    </div>
  )
}
