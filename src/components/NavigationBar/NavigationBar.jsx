import React from 'react';
import {
  Route, Switch, NavLink, Link,
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Home from 'components/Home';
import Products from 'components/Products';
import ShoppingLists from 'components/ShoppingLists';
import Settings from 'components/Settings';
import logo from 'assets/logo.png';
import styles from './navigationBar.scss';

const NavigationBar = () => (
  <>
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="Logo" width="50" height="30" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
          <Nav.Link as={NavLink} to="/shopping-lists">My shopping lists</Nav.Link>
          <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/shopping-lists">
        <ShoppingLists />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </Switch>
  </>
);

export default NavigationBar;
