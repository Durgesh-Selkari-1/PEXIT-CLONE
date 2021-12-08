import React from 'react';
export default function Footer() {
    return (

        <div>
            <footer className="page-footer fixed-bottom">
                <div className="">
                    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#B6B8BB' }}>
                        <a className="navbar-brand" href="#" style={{ fontWeight: '', marginLeft: 20 }}>Copyright @ 2020, PEXit</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""></span>
                        </button>
                        <div className="" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto justify-content-end" style={{ fontWeight: '', fontSize: 20, marginLeft: 750 }}>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#" style={{ color: 'black' }}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'black' }}>Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'black' }}>Terms</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'black' }}>Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: 'black' }}>Partners</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: 'black' }}>
                                        Language
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#" style={{ color: 'black' }}>1</a>
                                        <a className="dropdown-item" href="#" style={{ color: 'black' }}>2</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="style={{color:'black'}}">3</a>
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
