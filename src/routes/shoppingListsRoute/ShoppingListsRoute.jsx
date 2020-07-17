import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

import PATH from '~/routes/paths';
import ShoppingLists from '~/components/ShoppingLists';
import ShoppingListRoute from './ShoppingListRoute';

const ShoppingListsGoTo = {
  SHOPPING_LIST: (id) => PATH.SHOPPING_LIST.GO_TO(id),
};

const ShoppingListsRoute = () => (
  <Switch>
    <Route exact path={PATH.SHOPPING_LIST.ALL}>
      <ShoppingLists goTo={ShoppingListsGoTo} />
    </Route>
    <Route path={PATH.SHOPPING_LIST.VIEW}>
      <ShoppingListRoute />
    </Route>
  </Switch>
);

export default ShoppingListsRoute;
