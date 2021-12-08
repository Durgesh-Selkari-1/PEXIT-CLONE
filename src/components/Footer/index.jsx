import React from 'react';
import './footer.css'
export default function Footer() {
    return (

        <div>
            <footer className="page-footer fixed-bottom">
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
            </footer>
        </div>

    );
}
