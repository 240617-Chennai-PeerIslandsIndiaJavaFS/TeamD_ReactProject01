import React, { useState, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import { TopNav } from '../Navbar/TopNav';
import './Home.css'
import { userContext } from '../Context/UserContextComponent';
import { Analysis } from '../Analysis/Analysis';
import DisplayMessages from '../messages/DisplayMessages';
import CreateUserForm from '../forms/CreateUserForm';
import DisplayUser from '../DisplayUsers/DisplayUser';
import CreateProjectForm from '../forms/CreateProjectForm';
import DisplayProject from '../DisplayProject/DisplayProject';
import CreateClientForm from '../forms/CreateClientForm';
import DisplayClients from '../DisplayClients/DisplayClients';
import ProjectNavbar from '../projectnav/ProjectNavbar';
import ProjectCard from '../DisplayProject/ProjectCard';
import ClientRow from '../DisplayClients/ClientRow';

function AdminHome() {
  const { userDetail, projects } = useContext(userContext);
  const [show, setShow] = useState(false);
  const [navigateOptions, setNavigate] = useState("default");
  const [adminContext, setAdminContext] = useState("default");
  const [projectDetails, setProjectDetails] = useState("default");

  const toggleNavbar = () => {
    setShow(!show);
  };

  const taskTitle = "Task analysis";
  const projectTitle = "Project analysis";

  const taskData = [
    ["In queue", 5],
    ["In Progess", 8],
    ["Testing", 2],
    ["In Review", 3],
    ["Merged", 1],
    ["closed", 4]
  ];

  const projectData = [
    ["Completed", 5],
    ["Progess", 2]
  ];

  return (
    <div className="home">
      <div className='main'>
        <Navbar show={show} setNavigate={setNavigate} toggleNavbar={toggleNavbar} adminContext={setAdminContext} />
        <div className={`no-expand ${show ? 'content' : ''}`}>
          <div className={`all-component-container ${show ? 'move' : ''}`}>
            <TopNav options={navigateOptions} adminContext={setAdminContext} />
            {adminContext === "default" || adminContext === "analysis" ?
              <div>
                <Analysis title={taskTitle} data={taskData} />
                <Analysis title={projectTitle} data={projectData} />
              </div>
              : adminContext === "messages" ?
                <DisplayMessages />
                : adminContext === "createUser" ?
                  <CreateUserForm />
                  : adminContext === "updateUser" ?
                    <CreateUserForm /> : adminContext === "viewUser" ?
                      <DisplayUser />
                      : adminContext === "createProject" ?
                        <CreateProjectForm />
                        : adminContext === "updateProject" ?
                          <CreateProjectForm />
                          : adminContext === "viewProject" ?
                            <DisplayProject />
                            : adminContext === "createClient" ?
                              <CreateClientForm />
                              : adminContext === "updateClient" ?
                                <CreateClientForm />
                                : adminContext === "viewClient" ?
                                  <DisplayClients />
                                  : adminContext === "profile" ?
                                    <>
                                    </>
                                    : adminContext > -1 ?
                                      <ProjectNavbar projectDetails={setProjectDetails} projectData={projects[adminContext]} />
                                      :
                                      <></>
            }
            <div id='project'>
              {projectDetails === "default" || projectDetails === "task" ?
                <><h1>Drag and Drop</h1></>
                : projectDetails === "details" ?
                  <>
                    <ProjectCard project={projects[adminContext]} />
                    <ClientRow client={projects[adminContext].client} />
                  </>
                  :projectDetails=="team"? <>
                  <h1>Team selected</h1>
                  </>:<></>}
            </div>
          </div>
        </div>
      </div>
      <div className={`${show ? 'content' : ''}`}>
        {/* <Copyright/> */}
      </div>
    </div>
  );
}

export default AdminHome;
