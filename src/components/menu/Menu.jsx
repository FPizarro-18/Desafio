import React, { useState } from 'react';
import {
    Collapse,
    Navbar as NavbarRS,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
import Registro from '../registro/Registro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { logoutActionCreator } from '../../store/modules/auth/actions';
import SwitchColor from  '../../components/switch/Switch'


  const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    const dispatch = useDispatch();
    const handlerLogout = (event) => {
      dispatch(logoutActionCreator());
    }
    return (
      <div>
        <NavbarRS color="light" light expand="md">
          <NavbarBrand href="/private/home/">Desafio Latam
         
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="/private/home/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/private/users">Lista Usuarios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/private/newpost">Nuevo Post</NavLink>
              </NavItem>
              <NavItem>
              
              </NavItem>
              <NavItem>
              <span onClick={handlerLogout} className="nav-link cursor-pointer">Cerrar sesión</span>
            </NavItem>
            </Nav>
          </Collapse>
        </NavbarRS>
        <SwitchColor ></SwitchColor>
      </div>
    );
  }
  
  export default Menu;