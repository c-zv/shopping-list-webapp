import React from 'react';
import PropTypes from 'prop-types';

import useProductHook from './hooks';

const Product = ({ productId }) => {
  const { product } = useProductHook(productId);

  return (
    <>
      {product ? (
        <div>
          <p>Current Product ({product.name}):</p>
          <p>
            Current product ID is {product.id}
          </p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </>
  );
};

Product.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Product;
