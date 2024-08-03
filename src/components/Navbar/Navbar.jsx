import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLayerGroup, faCircleUser, faRightToBracket, faUsers, faClipboard, faProjectDiagram, faChartBar, faEnvelope, faCog} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Navbar = ({show,toggleNavbar,setNavigate}) => {
    const [activeLink, setActiveLink] = useState('');
    // Context
    const user= {
        "user_id": 2,
        "user_name": "User2",
        "user_role": "MANAGER",
        "email": "manager@gmail.com",
        "password": "Manager@123", // Placeholder, replace with secure password hashing
        "phone": "+1-555-123-4562",
        "manager_id": null,
        "status": "Inactive"
      }
    //  context

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
    const userOption=()=>{
        setNavigate("user");
    }

    const clientOption=()=>{
        setNavigate("client");
    }

    const projectOption=()=>{
        setNavigate("project");
    }
    const viewProjects=()=>{
        setNavigate("viewProjects")
    }
    let options;
    if(user.user_role=="ADMIN"){
    options = [
        ["Users",faUsers,userOption],
        ["Clients" ,faClipboard,clientOption],
        ["Projects",faProjectDiagram,projectOption],
        ["Stats",faChartBar,userOption],
       ]
    }
    else{
        options=[
            ["View Projects",faProjectDiagram,viewProjects],
        ]
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
                <div className="profile">
                    <div className="header_img">
                        <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                    <p className="profile-name">Admin</p>
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
                            {options.map((feature,idx) => (
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
                    <a href="#" className="nav_link">
                        <FontAwesomeIcon icon={faEnvelope} className="fa-rotate-180 nav_icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" />
                        <span className="nav_name">Messages</span>
                    </a>
                    <a href="#" className="nav_link">
                        <FontAwesomeIcon icon={faRightToBracket} className="fa-rotate-180 nav_icon" />
                        <span className="nav_name">SignOut</span>
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
