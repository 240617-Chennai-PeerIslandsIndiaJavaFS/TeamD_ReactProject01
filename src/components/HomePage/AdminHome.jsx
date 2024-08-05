import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { TopNav } from '../Navbar/TopNav';
import DisplayMessages from '../messages/DisplayMessages';
import './Home.css'


function AdminHome() {
    // const type="USER"
    const [show, setShow] = useState(false);
    const [user,setUser]=useState({
      "user_id": 1,
    "user_name": "User1",
    "user_role": "ADMIN",
    "email": "admin@gmail.com",
    "password": "Admin@123", 
    "phone": "+1-555-123-4561",
    "manager_id": null,
    "status": "Active"
    })
    const[navigateOptions,setNavigate]=useState("default")



    const toggleNavbar = () => {
      setShow(!show);
    };
    
    return (        
      <div className="home">
        {/* <h1>Rev Task Management</h1> */}
        <div className='main'>
          <Navbar show={show} user={user} setNavigate={setNavigate} toggleNavbar={toggleNavbar}/>
          <div className={`no-expand ${show ? 'content' : ''}`}>
            <TopNav options={navigateOptions}/>
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sequi, vero quo fuga suscipit quia voluptatem iure eos nulla veniam delectus sint mollitia dolorum amet ipsum aliquam quos in? Quaerat!</p> */}
         <div id="content">

         </div>
            <div>
            </div>

          </div>
        </div>

        <div className={`${show ? 'content' : ''}`}>
          {/* <Copyright/> */}
        </div>
      </div>     
      
      
    );
}

export default AdminHome