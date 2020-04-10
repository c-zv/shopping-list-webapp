import React from 'react';

const useProductsHook = () => {
  const products = [
    {
      id: '1',
      name: 'Product 1',
    },
    {
      id: '2',
      name: 'Product 2',
    },
    {
      id: '3',
      name: 'Product 3',
    },
  ];

  return { products };
};

export default useProductsHook;
