import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionsProducts, selectorsProducts } from '~/state/products';

const randomProduct = () => ({
  id: `${Math.round(Math.random() * 100000)}`,
  name: `name_${Math.round(Math.random() * 1000).toString()}`,
  imageLink: 'http://placeimg.com/190/200/tech',
});

const useProductsHook = () => {
  const products = useSelector(selectorsProducts.getProducts);
  const dispatch = useDispatch();

  const addProduct = useCallback(
    () => (dispatch(actionsProducts.addProduct(randomProduct()))),
    [dispatch],
  );

  return { products, addProduct };
};

export default useProductsHook;
