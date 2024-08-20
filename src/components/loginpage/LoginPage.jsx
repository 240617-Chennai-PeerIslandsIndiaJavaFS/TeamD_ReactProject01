import React, { useContext, useState } from 'react'
import login from '../../images/Mobile login-amico.png'
import { userContext } from '../Context/UserContextComponent';
import "./LoginPage.css"
import axios from 'axios';
import { json, Link,useNavigate} from 'react-router-dom';
function LoginPage() {

    const {userDetail,setUserDetail,projects,setProjects} = useContext(userContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
            const response = axios.get(`http://localhost:8080/api/employee/login?email=${email}&password=${password}`).then((response)=>{
                if(response.data.status==202){
                    console.log("Login successful");
                    localStorage.setItem("user",JSON.stringify(response.data.data));
                    setUserDetail(JSON.parse(localStorage.getItem("user")))
                    navigate("/home")
                }
                else{
                alert("In valid credentials: "+localStorage.data.status)
                }
            })
            .catch((err)=>{
                alert("In valid credentials from error")
                console.log(err.response.data);
                
            })
            // console.log(userData);
            
            
            // localStorage.setItem(data,us)
            // setUserDetail(userData);
            // fetchProjects(userData);
            // navigate("/home")
        
        setEmail("");
        setPassword("");
    }

    const fetchProjects = async(userData)=>{
        // console.log(userData);
        let url;
        if(userData.user_role === "ADMIN")
            url = "http://localhost:3001/projects";
        else if(userData.user_role === "MANAGER" || userData.user_role === "ASSOCIATE")
            // url = `http://localhost:3001/projects?manager=${userData.user_name}`;
            url = `http://localhost:3001/projects?manager=User2`;

        if(url){
            try{
                const projectResponse = await axios.get(url);
                // console.log("API Response:", typeof(projectResponse.data));
                if (Array.isArray(projectResponse.data)) {
                    // console.log("Array it is")
                    setProjects(projectResponse.data);
                    // console.log(projectResponse.data);
                }
            }
            catch(err){
                console.log(err);
            }
        }
    }

    return (

        <div className="login-container">
            <div className="illustration">
                <img src={login} alt="Login Illustration" />
            </div>
            <div className="login-form">
                <h2>Welcome back</h2>
                <p>Welcome back! Please enter your details.</p>
                <form onSubmit={handleSubmit}>
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
                        <Link to="/reset" className='forgot-password'>Forgot Password</Link>
                    </div>
                    <button type="submit" className="login-button">Log in</button>
                </form>
            </div>
        </div>
        
    )
}

export default LoginPage