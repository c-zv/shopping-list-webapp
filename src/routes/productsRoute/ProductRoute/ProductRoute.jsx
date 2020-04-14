import React from 'react';
import { useParams } from 'react-router-dom';

import Product from 'components/Product';

const ProductRoute = () => {
  const { productId } = useParams();
  return (
    <Product productId={productId} name="TTT2" />
  );
}

export default ProductRoute;
