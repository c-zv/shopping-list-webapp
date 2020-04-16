import React from 'react';
import {
  NavLink, Link,
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import logo from 'assets/logo.png';

const NavigationBar = ({ goTo }) => (
  <Navbar bg="dark" variant="dark" expand="sm">
    <Navbar.Brand as={Link} to={goTo.HOME()}>
      <img src={logo} alt="Logo" width="50" height="30" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to={goTo.PRODUCTS()}>Products</Nav.Link>
        <Nav.Link as={NavLink} to={goTo.SHOPPING_LISTS()}>My shopping lists</Nav.Link>
        <Nav.Link as={NavLink} to={goTo.SETTINGS()}>Settings</Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
