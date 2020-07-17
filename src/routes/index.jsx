import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

import NavigationBar from '~/components/NavigationBar';
import PATH from '~/routes/paths';
import HomeRoute from './homeRoute';
import ProductsRoute from './productsRoute';
import ShoppingListsRoute from './shoppingListsRoute';
import SettingsRoute from './settingsRoute';

const navBarGoTo = {
  HOME: () => PATH.HOME,
  PRODUCTS: () => PATH.PRODUCT.ALL,
  SHOPPING_LISTS: () => PATH.SHOPPING_LIST.ALL,
  SETTINGS: () => PATH.SETTINGS,
};

const startingRouter = (
  <Switch>
    <Route exact path={PATH.HOME}>
      <HomeRoute />
    </Route>
    <Route path={PATH.PRODUCT.ALL}>
      <ProductsRoute />
    </Route>
    <Route path={PATH.SHOPPING_LIST.ALL}>
      <ShoppingListsRoute />
    </Route>
    <Route path={PATH.SETTINGS}>
      <SettingsRoute />
    </Route>
  </Switch>
);

const StartingRoute = () => (
  <NavigationBar goTo={navBarGoTo} router={startingRouter} />
);

export default StartingRoute;
