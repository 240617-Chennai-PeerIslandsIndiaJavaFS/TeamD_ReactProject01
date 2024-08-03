import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import Copyright from '../Footer/Copyright';
// import DisplayProject from '../DisplayProject/DisplayProject'
import LoginPage from '../loginpage/LoginPage';
import DisplayProject from '../DisplayProject/DisplayProject';
import DisplayUser from '../DisplayUsers/DisplayUser';
import './Home.css'


function Home() {
    // const type="USER"
    const [show, setShow] = useState(false);

    const toggleNavbar = () => {
      setShow(!show);
    };
    
    return (   
      <>
        <div className="home">
            <Navbar show={show} toggleNavbar={toggleNavbar}/>
            <div className={`all-main-component no-expand ${show ? 'content' : ''}`} style={{border:"2px solid black"}}>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti assumenda voluptates velit nisi modi fugit iure expedita? Praesentium repellendus placeat sint sed odio, esse aperiam. Quia accusantium accusamus facere totam fugiat molestiae qui at sit non sint quam esse dolores inventore earum nesciunt, dignissimos saepe, dolor quos beatae deleniti tempora eos nostrum! Eius sapiente, sed consectetur fuga incidunt alias nihil voluptate maxime cum expedita laborum esse porro qui corrupti voluptatem praesentium id, fugiat excepturi reprehenderit cumque quasi. Accusantium fuga aliquid nobis aspernatur nisi blanditiis atque illum sint quidem, adipisci obcaecati! Minima est veniam sunt libero vel incidunt ducimus aliquid?</p> */}
              {/* <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat cumque facilis magnam aperiam vero quae ullam nostrum illum, quod nisi similique voluptas, tempora consectetur dolorum voluptatum laudantium. Sunt illum nesciunt accusamus corrupti odit voluptates, numquam recusandae, quam similique, blanditiis rem deserunt obcaecati vitae ea repellendus iure quo maxime? Quos illo obcaecati, voluptatem laboriosam debitis sunt odit sint repellendus assumenda dolorem! Voluptatem sunt, deserunt repellat autem id minus incidunt quia sequi soluta similique quod voluptate tempore placeat, nulla blanditiis reprehenderit esse consequatur obcaecati dolor laboriosam vel voluptas quae dolorum ipsa. Ipsam facere nam blanditiis est molestias similique accusantium dolorum, neque modi unde explicabo. Non recusandae tempore libero sequi omnis ratione sint ullam veritatis. Sequi voluptas quam fugiat earum numquam non necessitatibus nam officiis architecto facilis maxime est, neque distinctio cupiditate explicabo facere quis tenetur iure sed quos atque labore? Officiis, voluptates id! Ullam ab vitae quos maxime temporibus nisi nam quasi omnis reiciendis. Atque omnis voluptates quam deleniti provident quae architecto rem nulla quos amet, illum error optio officiis asperiores sint saepe consequatur consequuntur. Exercitationem cupiditate rerum voluptatibus quia iusto unde, non voluptate velit amet eveniet aliquam ducimus ad quaerat, reprehenderit quod alias fuga illo quasi ut nesciunt quo! Excepturi, aliquam.</span> */}
                      
              {/* <LoginPage/> */}
              {/* <DisplayProject/> */}
              <DisplayUser/>
            </div>
        </div>

        <div className={`${show ? 'content' : ''}`}>
          <Copyright/>
        </div>
      </>     
      
      
    );
}

export default Home