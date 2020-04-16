import React from 'react';
import { useParams } from 'react-router-dom';

import Product from 'components/Product';

const ProductRoute = () => {
  const { productId } = useParams();
  return (
    <Product productId={productId} />
  );
};

export default ProductRoute;
