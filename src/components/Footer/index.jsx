import React,{useState} from 'react';
import './footer.css';


import { NavLink } from "react-router-dom";
export default function Footer() {

    return (

        <body>
     
       <nav className="main-nav-f">
     
         <div className="logo-f">
          <h1>Copyright @ 2020, PEXit</h1>
         </div>
 
         <div
           className={
              "menu-link-f mobile-menu-link-f" 
           }>
           <ul>
             <li>
               <NavLink to="/about">about</NavLink>
             </li>
             <li>
               <NavLink to="/support">support</NavLink>
             </li>
             <li>
               <NavLink to="/terms">terms</NavLink>
             </li>
             <li>
               <NavLink to="/pricing">pricing</NavLink>
             </li>
             <li>
               <NavLink to="/partners">partners</NavLink>
             </li>
             <li>
               <NavLink to="/Language">Language</NavLink>
             </li>
           </ul>
         </div>
 
       
        
       </nav>
 
       
   
     
 
 
        <div>
            {/* <footer className="page-footer fixed-bottom">
                <div className="navBar-">
                    <nav className="navbar navbar-expand-lg navbar-light" >
                        <a className="navbar-brand ml-20" href="#">Copyright @ 2020, PEXit</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""></span>
                        </button>
                        <div className="" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link text-dark" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#" >Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#" >Terms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#" >Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#" >Partners</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'black' }}>
                                        Language
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#" >1</a>
                                        <a className="dropdown-item" href="#" >2</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item text-dark" href="">3</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </footer> */}
        </div>
        </body>

    );
}
