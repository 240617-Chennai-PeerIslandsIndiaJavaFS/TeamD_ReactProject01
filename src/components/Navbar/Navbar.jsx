import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLayerGroup, faCircleUser, faRightToBracket, faUsers, faClipboard, faProjectDiagram, faChartBar, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { userContext } from '../Context/UserContextComponent';
import { Link } from 'react-router-dom';

const Navbar = ({ show, toggleNavbar, setNavigate,adminContext}) => {
  const [activeLink, setActiveLink] = useState('');

  const { userDetail, setUserDetail, projects, setProjects } = useContext(userContext);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const userOption = () => {
    setNavigate('user');
  };

  const clientOption = () => {
    setNavigate('client');
  };

  const projectOption = () => {
    setNavigate('project');
  };

  const viewProjects = () => {
    setNavigate('viewProjects');
  };

  const statsOption=()=>{
    console.log("clicked stats option");
    adminContext("analysis");
  }

  const messageOption=()=>{
    adminContext("messages");
  }

  useEffect(()=>{

  } ,[userDetail])


  let options;
  if (userDetail.role === 'ADMIN') {
    options = [
      ['Users', faUsers, userOption],
      ['Clients', faClipboard, clientOption],
      ['Projects', faProjectDiagram, projectOption],
      ["statistics",faChartBar,statsOption],
      ['messages',faEnvelope,messageOption]
    ];
  } else {
    options = [
      ['View Projects', faProjectDiagram, viewProjects],
      ["statistics",faChartBar,statsOption],
      ['messages',faEnvelope,messageOption]
    ];
  }

  return (
    <>
      <header className={`header ${show ? 'body-pd' : ''}`} id="header">
        <div className="header_toggle" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} id="header-toggle" />
        </div>
        <div className="current-time">
          <FontAwesomeIcon icon={faClock} className="clock-icon" />
          {currentTime}
        </div>
        <div className="profile" style={{cursor:"pointer"}} onClick={()=>{adminContext("profile")}}>
          <div className="header_img" onClick={()=>adminContext("profile")}>
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
          <p className="profile-name">{userDetail.user_name}</p>
        </div>
      </header>
      <div className={`l-navbar ${show ? 'show' : ''}`} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="#" className="nav_logo">
              <FontAwesomeIcon icon={faLayerGroup} className="nav_logo-icon" />
              <span className="nav_logo-name">RevTask</span>
            </a>
            <div className="nav_list">
              {options.map((feature, idx) => (
                <a
                  href="#"
                  className={`nav_link`}
                  key={idx}
                  onClick={() => feature[2]()}
                >
                  <FontAwesomeIcon icon={feature[1]} className="nav_icon" />
                  <span className="nav_name">{feature[0]}</span>
                </a>
              ))}
            </div>
          </div>
          <Link to="/" className="nav_link">
            <FontAwesomeIcon icon={faRightToBracket} className="fa-rotate-180 nav_icon" />
            <span className="nav_name">SignOut</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
