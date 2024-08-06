import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { TopNav } from '../Navbar/TopNav';
import './Home.css'
import { userContext } from '../Context/UserContextComponent';


function AdminHome() {
  const [show, setShow] = useState(false);
  const [navigateOptions, setNavigate] = useState("default")
  const toggleNavbar = () => {
    setShow(!show);
  };

  return (
    <div className="home">
      {/* <h1>Rev Task Management</h1> */}
      <div className='main'>
        <Navbar show={show} setNavigate={setNavigate} toggleNavbar={toggleNavbar} />
        <div className={`no-expand ${show ? 'content' : ''}`}>
          <div className={`all-component-container ${show ? 'move' : ''}`}>
          <TopNav options={navigateOptions}/>
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