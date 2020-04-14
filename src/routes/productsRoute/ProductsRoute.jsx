import React from 'react';
import {
  Route, Switch
} from 'react-router-dom';

import ProductRoute from './ProductRoute';
import Products from 'components/Products';

const ProductsRoute = () => (
  <Switch>
    <Route exact path="/products">
      <Products />
    </Route>
    <Route path="/products/:productId">
      <ProductRoute />
    </Route>
  </Switch>
);

export default ProductsRoute;
