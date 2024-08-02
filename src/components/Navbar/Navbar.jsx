import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLayerGroup, faCircleUser, faRightToBracket, faUsers, faClipboard, faProjectDiagram, faChartBar, faEnvelope, faCog} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Navbar = ({show,toggleNavbar,setNavigate}) => {
    const [activeLink, setActiveLink] = useState('');

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
        setNavigate((data)=>{
          return {...data,"user":true}
        });

    }

    const admin = [
        ["Users",faUsers,userOption],
        ["Clients" ,faClipboard,userOption],
        ["Projects",faProjectDiagram,userOption],
        ["Stats",faChartBar,userOption],
     
    ]
    const commonOptions={
        Message: [faEnvelope,userOption],
        Settings: [faCog,userOption]
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
                            {admin.map((feature,idx) => (
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
                        <FontAwesomeIcon icon={faRightToBracket} className="fa-rotate-180 nav_icon" />
                        <span className="nav_name">SignOut</span>
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
