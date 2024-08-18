import React, { useState, useContext, useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import { TopNav } from '../Navbar/TopNav';
import { userContext } from '../Context/UserContextComponent';
import { Analysis } from '../Analysis/Analysis';
import DisplayMessages from '../messages/DisplayMessages';
import CreateUserForm from '../forms/CreateUserForm';
import DisplayUser from '../DisplayUsers/DisplayUser';
import ProjectForm from '../forms/ProjectForm';
import DisplayProject from '../DisplayProject/DisplayProject';
import ClientForm from '../forms/ClientForm';
import DisplayClients from '../DisplayClients/DisplayClients';
import ProjectNavbar from '../projectnav/ProjectNavbar';
import ProjectCard from '../DisplayProject/ProjectCard';
import ClientRow from '../DisplayClients/ClientRow';
import AddTeamMember from '../addmember/AddTeamMember';
import CreateTaskForm from '../forms/CreateTaskForm';
import ProfilePage from '../profile/ProfilePage';
import TaskBoard from '../TaskComponent/TaskBoard';
import Modal from '../Modal/Modal';
import './Home.css';
import axios from 'axios';
import { data } from 'jquery';

function AdminHome() {
  const { userDetail, projects } = useContext(userContext);
  const [show, setShow] = useState(false);
  const [navigateOptions, setNavigate] = useState("default");
  const [adminContext, setAdminContext] = useState("default");
  const [projectDetails, setProjectDetails] = useState("default");
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  useEffect(() => {
    // Handle user details if needed in the effect
  }, [userDetail]);

  const toggleNavbar = () => {
    setShow(!show);
  };

  const taskTitle = "Task analysis";
  const projectTitle = "Project analysis";

  const taskData = [
    ["IN_QUEUE", 0],
    ["COMMENCED", 0],
    ["TESTING", 0],
    ["IN_REVIEW", 0],
    ["BLOCKED", 0],
    ["MERGED", 4],
    ["CLOSED", 2],
  ];
  let task;
  if(projects !== undefined && Array.isArray(projects)){
      projects.forEach((project)=>{
        axios.get(`http://localhost:8080/api/tasks/project/${project.projectId}`)
        .then((reponse)=>{
          task=reponse.data
          task.forEach((t)=>{
            taskData.forEach((td)=>{
              if(td[0]===t.current_status){
                td[1]+=1
              }
            })
          })

        })
        .catch(()=>{
          console.log("Error in fetching tasks");
        })
      })
  }  
  const projectData = [
    ["ON_HOLD", 0],
    ["IN_PROGRESS", 0],
    ["COMPLETED", 0],
  ];


  if (projects !== undefined && Array.isArray(projects)) {
    projects.forEach((project) => {
      // Your existing logic for updating projectData
      projectData.forEach((status) => {
        if (status[0] === project.projectStatus) {
          status[1] += 1;
        }
      });
    });
  }

  return (
    <div className="home">
      <div className="main">
        <Navbar show={show} setNavigate={setNavigate} toggleNavbar={toggleNavbar} adminContext={setAdminContext} />
        <div className={`no-expand ${show ? 'content' : ''}`}>
          <div className={`all-component-container ${show ? 'move' : ''}`}>
            <TopNav options={navigateOptions} adminContext={setAdminContext} projectDetails={setProjectDetails} />
            {adminContext === "default" || adminContext === "analysis" ? (
              <div>
                <Analysis title={taskTitle} data={taskData} />
                <Analysis title={projectTitle} data={projectData} />
              </div>
            ) : adminContext === "messages" ? (
              <DisplayMessages />
            ) : adminContext === "createUser" ? (
              <button onClick={() => openModal(<CreateUserForm />)}>Open Create User Form</button>
            ) : adminContext === "updateUser" ? (
              <CreateUserForm />
            ) : adminContext === "viewUser" ? (
              <DisplayUser />
            ) : adminContext === "createProject" ? (
              <ProjectForm />
            ) : adminContext === "updateProject" ? (
              <ProjectForm isUpdate={true} />
            ) : adminContext === "viewProject" ? (
              <DisplayProject />
            ) : adminContext === "createClient" ? (
              <ClientForm isUpdate={false} />
            ) : adminContext === "updateClient" ? (
              <ClientForm isUpdate={true} />
            ) : adminContext === "viewClient" ? (
              <DisplayClients />
            ) : adminContext === "profile" ? (
              <>
                <ProfilePage user={userDetail} />
              </>
            ) : adminContext > -1 ? (
              <ProjectNavbar projectDetails={setProjectDetails} projectData={projects[adminContext]} />
            ) : (
              <></>
            )}
            <div id="project">
              {projectDetails === "task" && adminContext > -1 ? (
                <TaskBoard project={adminContext} />
              ) : projectDetails === "details" ? (
                <>
                  <ProjectCard project={projects[adminContext]} />
                  <ClientRow client={projects[adminContext].client} />
                </>
              ) : projectDetails === "team" ? (
                <>
                  <h1>Team selected</h1>
                  <AddTeamMember project={projects[adminContext]} />
                </>
              ) : projectDetails === "createTask" ? (
                <>
                  <CreateTaskForm />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} content={modalContent} />

      <div className={`${show ? 'content' : ''}`}>
        {/* <Copyright/> */}
      </div>
    </div>
  );
}

export default AdminHome;
