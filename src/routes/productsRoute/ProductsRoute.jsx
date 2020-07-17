import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

import PATH from '~/routes/paths';
import Products from '~/components/Products';
import ProductRoute from './ProductRoute';

const productsGoTo = {
  PRODUCT: (id) => PATH.PRODUCT.GO_TO(id),
};

const ProductsRoute = () => (
  <Switch>
    <Route exact path={PATH.PRODUCT.ALL}>
      <Products goTo={productsGoTo} />
    </Route>
    <Route path={PATH.PRODUCT.VIEW}>
      <ProductRoute />
    </Route>
  </Switch>
);

export default ProductsRoute;
