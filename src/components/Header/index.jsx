import React from 'react';
import logo from './../../../src/assets/landingpage_img/logo.png'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
export default function Header() {
    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <body>
            <header className="page-header fixed-top">
                <div className="container-fluid">

                    <Navbar color="" light expand="md" style={{ backgroundColor: '#B6B8BB' }} >
                        <NavbarBrand href="/"><img src={logo} alt="Logo" /></NavbarBrand>
                        <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar style={{ marginLeft: '75%' }}>
                                <NavItem >
                                    <NavLink href="#">
                                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "white" }}>LogIn</button>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "white" }} >Join Now</button>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>

                </div>
            </header>
        </body>
    );
}





