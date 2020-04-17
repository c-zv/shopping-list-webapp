import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actProducts } from 'state/products';

const randomProduct = () => ({
  id: `${Math.round(Math.random() * 100000)}`,
  name: `name_${Math.round(Math.random() * 1000).toString()}`,
  imageLink: 'http://placeimg.com/300/160/tech',
});

const useProductsHook = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const addProduct = useCallback(
    () => (dispatch(actProducts.addProduct(randomProduct()))),
    [dispatch],
  );

  return { products, addProduct };
};

export default useProductsHook;
