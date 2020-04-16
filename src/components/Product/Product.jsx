import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ productId, name }) => (
  <div>
    <p>Current Product ({name}):</p>
    <p>
      Current product ID is {productId}
    </p>
  </div>
);

Product.propTypes = {
  productId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Product;
