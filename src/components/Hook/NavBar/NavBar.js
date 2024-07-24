
import React from 'react';
import { useCallback } from 'react';

import logo from "./logo.svg";
import { useState } from 'react';
import "./NavBar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  Input,
  InputGroupText,
  Container,

} from 'reactstrap';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
<>  <div id='container'>
    <Navbar expand="md" className='w-75' >

      <NavbarBrand href=""><img src={logo}/></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse  isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Tours</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Destinations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/components/">Pages</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <InputGroup className='w-25'>
    <Input />
    <InputGroupText>
      Search
    </InputGroupText>
  </InputGroup>
  </div>
  </>
  );
}

export default NavBar;