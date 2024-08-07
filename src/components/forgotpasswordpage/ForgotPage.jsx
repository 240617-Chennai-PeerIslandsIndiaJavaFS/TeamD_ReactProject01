// src/components/ForgotPasswordPage/ForgotPage.jsx
import React from 'react';
import './ForgotPage1.css';
import ResetButton from '../buttons/ResetButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../images/forget-password-image.png';
import { Link } from 'react-router-dom';

const ForgotPage = () => {
    const handleResetClick = () => {
        // Handle the reset logic here
        console.log('Reset button clicked');
    };

    return (
        <div className="container-fluid forgot-password-container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6 col-lg-4 d-none d-md-flex justify-content-center align-items-center forgot-password-image">
                    <img src={image} alt="Forgot Password" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 col-lg-4 forgot-password-form">
                    <div className="forgot-password-form-container">
                        <h2>Forgot Password</h2>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter OTP" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="New password" required />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm password" required />
                            </div>
                            <Link className='btn btn-primary' to="/" value="Reset">Reset</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ForgotPage;
