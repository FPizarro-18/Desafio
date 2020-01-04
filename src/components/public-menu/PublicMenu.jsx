import React, { useState } from 'react';
import {
    Collapse,
    Navbar as NavbarRS,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import Registro from '../registro/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import  './public-menu.css';
import ModalExample from '../../containers/modal-form/ModalForm';

  const PublicMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
   
    return (
      <div>
        <NavbarRS className="barra" color="dark" light expand="md" >
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar  >
              <NavItem  >
              <NavLink href="/login" className="navlink">Login</NavLink>
              {/* <ModalExample value="Login"/> */}
              
            </NavItem>
            </Nav>
          </Collapse>
        </NavbarRS>
      </div>
    );
  }
  
  export default PublicMenu;