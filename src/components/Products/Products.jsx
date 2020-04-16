import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { actProducts } from 'state/products';
import useProductsHook from './hooks';

const Products = ({ goTo }) => {
  const { products, randomProduct } = useProductsHook();
  const dispatch = useDispatch();

  return (
    <>
      <div>
        Products tab!
      </div>
      <div>
        <button type="button" onClick={() => (dispatch(actProducts.addProduct(randomProduct())))}> Create random product </button>
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
