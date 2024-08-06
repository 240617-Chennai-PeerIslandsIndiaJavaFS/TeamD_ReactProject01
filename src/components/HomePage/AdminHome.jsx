import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { TopNav } from '../Navbar/TopNav';
import './Home.css'
import { userContext } from '../Context/UserContextComponent';
import { useContext } from 'react';
import { Analysis } from '../Analysis/Analysis';
import DisplayMessages from '../messages/DisplayMessages';
import CreateUserForm from '../forms/CreateUserForm';
import DisplayUser from '../DisplayUsers/DisplayUser';
import CreateProjectForm from '../forms/CreateProjectForm';
import DisplayProject from '../DisplayProject/DisplayProject';
import CreateClientForm from '../forms/CreateClientForm';
import DisplayClients from '../DisplayClients/DisplayClients';


function AdminHome() {
  const { userDetail, setUserDetail, projects, setProjects } = useContext(userContext);
  const [show, setShow] = useState(false);
  const [navigateOptions, setNavigate] = useState("default")

  const toggleNavbar = () => {
    setShow(!show);
  };
  const [adminContext, setAdminContext] = useState("default")
  const taskTitle = "Task analysis"
  const projectTitle = "Project analysis"
  const taskData = [
    ["In queue", 5],
    ["In Progess", 8],
    ["Testing", 2],
    ["In Review", 3],
    ["Merged", 1],
    ["closed", 4]
  ]

  const projectData = [
    ["Completed", 5],
    ["Progess", 2]
  ]

  return (
    <div className="home">
      <div className='main'>
        <Navbar show={show} setNavigate={setNavigate} toggleNavbar={toggleNavbar} adminContext={setAdminContext} />
        <div className={`no-expand ${show ? 'content' : ''}`}>
          <div className={`all-component-container ${show ? 'move' : ''}`}>
            <TopNav options={navigateOptions} adminContext={setAdminContext} />
            {userDetail.user_role == "MANAGER" ? <TopNav options={navigateOptions}></TopNav> : <></>}
            {adminContext === "default" || adminContext === "analysis" ?
              <div >
                <Analysis title={taskTitle} data={taskData} />
                <Analysis title={projectTitle} data={projectData} />
              </div>
              : adminContext === "messages" ?
                <DisplayMessages></DisplayMessages>
                : adminContext === "createUser" ?
                  <CreateUserForm></CreateUserForm>
                  : adminContext === "updateUser" ?
                    <CreateUserForm></CreateUserForm> : adminContext === "viewUser" ?
                      <DisplayUser /> :
                      adminContext === "createProject" ?
                        <CreateProjectForm /> : adminContext === "updateProject" ?
                          <CreateProjectForm /> : adminContext === "viewProject" ?
                            <DisplayProject /> : adminContext === "createClient" ?
                              <CreateClientForm /> : adminContext === "updateClient" ?
                                <CreateClientForm /> : adminContext === "viewClient" ?
                                  <DisplayClients /> :
                                  <></>
            }
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