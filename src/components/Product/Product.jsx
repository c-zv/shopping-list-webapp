import React from 'react';

const Product = ({ productId, name }) => {
  return (
    <div>
      <p>Current Product ({name}):</p>
      <p>
        Current product ID is {productId}
      </p>
    </div>
  );
};

export default Product;
