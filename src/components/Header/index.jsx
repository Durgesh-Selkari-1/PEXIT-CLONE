import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './../../../src/assets/landingpage_img/logo.png';
export default function Header() {
  return (

    <header>

     
        <div className="container-fluid w-100">

          <div className='row '>
            <div className='col-6  d-flex justify-content-start align-items-center'>
            <a className="navbar-brand align-self-center" href="#">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>

            </div>
            <div className='col-6 d-flex justify-content-end align-items-center ' >
              <div className='align-self-center me-3'>
           <Link to="/login" >
           <button type="button" className="btn btn-light">Login</button>
           
           </Link>

              </div>

              <div className='align-self-center'>
                <Link to="/SignUpPage">
                <button type="button" className="btn btn-light">Join Now</button>

                </Link>

              </div>

            </div>

          </div>

        
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon color-primary"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav header-navbar-nav-dev">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  <button type="button" className="btn btn-light header-btn-login-dev ">Login</button>

                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <button type="button" className="btn btn-light header-btn-JoinNow-dev">Join Now</button>
                </a>
              </li>

            </ul>

          </div>
 */}

        </div>
     

    </header>












  );
}





