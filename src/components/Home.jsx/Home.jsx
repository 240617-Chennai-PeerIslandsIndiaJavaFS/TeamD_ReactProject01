import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import Copyright from '../Footer/Copyright';
import './Home.css'


function Home() {
    const [show, setShow] = useState(false);

    const toggleNavbar = () => {
      setShow(!show);
    };
  
    return (
      <div className="home">
        {/* <h1>Rev Task Management</h1> */}
        <div className='main'>
          <Navbar show={show} toggleNavbar={toggleNavbar}/>
          <div className={`no-expand ${show ? 'content' : ''}`}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti assumenda voluptates velit nisi modi fugit iure expedita? Praesentium repellendus placeat sint sed odio, esse aperiam. Quia accusantium accusamus facere totam fugiat molestiae qui at sit non sint quam esse dolores inventore earum nesciunt, dignissimos saepe, dolor quos beatae deleniti tempora eos nostrum! Eius sapiente, sed consectetur fuga incidunt alias nihil voluptate maxime cum expedita laborum esse porro qui corrupti voluptatem praesentium id, fugiat excepturi reprehenderit cumque quasi. Accusantium fuga aliquid nobis aspernatur nisi blanditiis atque illum sint quidem, adipisci obcaecati! Minima est veniam sunt libero vel incidunt ducimus aliquid?</p>
          </div>
        </div>
        <div className={`${show ? 'content' : ''}`}>
          <Copyright/>
        </div>
      </div>
      
    );
}

export default Home