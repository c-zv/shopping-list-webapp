import React from 'react';
import {
  Route, Switch
} from 'react-router-dom';

import HomeRoute from './homeRoute';
import ProductsRoute from './productsRoute';
import ShoppingListsRoute from './shoppingListsRoute';
import SettingsRoute from './settingsRoute';
import NavigationBar from 'components/NavigationBar';

const BaseRoute = () => (
  <>
    <NavigationBar />

    <Switch>
      <Route exact path="/">
        <HomeRoute />
      </Route>
      <Route path="/products">
        <ProductsRoute />
      </Route>
      <Route path="/shopping-lists">
        <ShoppingListsRoute />
      </Route>
      <Route path="/settings">
        <SettingsRoute />
      </Route>
    </Switch>
  </>
);

export default BaseRoute;
