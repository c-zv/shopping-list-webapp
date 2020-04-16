import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useProductsHook from './hooks';

const Products = ({ goTo }) => {
  const { products } = useProductsHook();

  return (
    <>
      <div>
        Products tab!
      </div>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link to={goTo.PRODUCT(prod.id)}>{prod.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Products.propTypes = {
  goTo: PropTypes.shape({
    PRODUCT: PropTypes.func.isRequired,
  }).isRequired,
};

export default Products;
