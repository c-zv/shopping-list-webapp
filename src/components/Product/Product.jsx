import React from 'react';
import { useParams } from 'react-router-dom';

const Product = ({name}) => {
  const { productId } = useParams();
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
