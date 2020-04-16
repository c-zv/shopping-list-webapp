import React from 'react';
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

export default Products;
