import React, { useState } from 'react';
import './Header.css'
import logo from './../../../src/assets/landingpage_img/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
export default function Header() {

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <body>
      <>
        <nav className="main-nav">
          <div className="logo" >
            <h2>  <img src={logo} /> </h2>
          </div>


          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <NavLink to="/"><button type="button" className="btn  btn-lg"><h1>Login</h1></button></NavLink>
              </li>
              <li>
                <NavLink to="/"><button type="button" className="btn btn-light btn-lg "><h1>Join Now</h1></button></NavLink>
              </li>
            </ul>
          </div>


          <div className="social-media">
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>


      </>
      
    </body>









  );
}





