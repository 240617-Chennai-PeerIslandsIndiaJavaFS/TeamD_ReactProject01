import React from 'react';
import ResetButton from '../buttons/ResetButton'; // Ensure the correct path
import './Profiles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ProfilePage = ({user}) => {
    // const user = {
    //     user_name: "User1",
    //     user_role: "Senior Developer",
    //     email: "admin@gmail.com",
    //     phone: "+1-555-123-4561",
    //     description: "Experienced developer with expertise in full-stack development. Passionate about building scalable applications and always eager to learn new technologies."
    // };

    const handleLogout = () => {
        console.log("User logged out");
        window.location.href = '/login';
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="profile-box p-4">
                        <h1 className="user-name">{user.user_name}</h1>
                        <h4 className="user-role text-muted">{user.user_role}</h4>
                        <p className="user-description">{user.description}</p>
                        <div className="contact-info mt-4">
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </div>
                        <div className="logout-button mt-4">
                            <Link className='btn btn-danger' to="/reset">Reset password</Link>
                        </div>
                        <div className="logout-button mt-4">
                            <Link className='btn btn-primary' to="/">Logout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
