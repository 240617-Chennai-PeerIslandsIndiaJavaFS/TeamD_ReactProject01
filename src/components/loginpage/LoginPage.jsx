import React, { useContext, useState } from 'react'
import login from '../../images/Mobile login-amico.png'
import { userContext } from '../Context/UserContextComponent';
import "./LoginPage.css"
import axios from 'axios';

function LoginPage() {

    const {userDetail,setUserDetail} = useContext(userContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(email,password);
        try{
            const response = await axios.get(`http://localhost:3001/users?email=${email}&password=${password}`);
            setUserDetail(response.data);
            console.log(userDetail);
        }
        catch(err){
            console.log(err);
        }
        setEmail("");
        setPassword("");
    }

    return (

        <div className="login-container">
            <div className="illustration">
                <img src={login} alt="Login Illustration" />
            </div>
            <div className="login-form">
                <h2>Welcome back</h2>
                <p>Welcome back! Please enter your details.</p>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    </div>
                    <div className="form-group terms">
                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Term & Conditions</label>
                        <a href="#" className='forgot-password'>Forgot Password</a>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="login-button">Log in</button>
                </form>
                <p className='signup-prompt'>Don't have an account ? <a href="#">Sign up for Free</a></p>
            </div>
        </div>
        
    )
}

export default LoginPage