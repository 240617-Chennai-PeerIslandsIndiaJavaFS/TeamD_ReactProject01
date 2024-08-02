import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import Copyright from '../Footer/Copyright';
import './Home.css'
import { TopNav } from '../sampleHome/TopNav';


function Home() {
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
    const[navigateOptions,setNavigate]=useState({
      "user":false,
      "client":false,
      "project":false,
      "projectnum":-1
    })

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

          </div>
        </div>
        <div className={`${show ? 'content' : ''}`}>
          <Copyright/>
        </div>
      </div>
      
    );
}

export default Home