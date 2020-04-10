import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import useProductsHook from './hooks';
import styles from './products.scss';

const Products = () => {
  const { url } = useRouteMatch();
  const { products } = useProductsHook();

  return (
    <>
      <div>
        Products tab!
      </div>
      <ul>
        {products.map((prod) => (
          <li>
            <Link to={`${url}/${prod.id}`}>{prod.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
