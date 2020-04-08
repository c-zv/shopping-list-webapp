import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Home from 'components/Home';
import Products from 'components/Products';
import ShoppingLists from 'components/ShoppingLists';
import Settings from 'components/Settings';
import styles from './navigationBar.scss';

const NavigationBar = () => (
  <>
    <div className={styles.navBar}>
      <NavLink className={styles.navLink} to="/">Home</NavLink>
      <NavLink className={styles.navLink} to="/products">Products</NavLink>
      <NavLink className={styles.navLink} to="/shopping-lists">My shopping lists</NavLink>
      <NavLink className={styles.navLink} to="/settings">Settings</NavLink>
    </div>

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
