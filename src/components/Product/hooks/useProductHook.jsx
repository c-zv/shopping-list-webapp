import { useSelector } from 'react-redux';

import { selectorsProducts } from 'state/products';
import { useMemo } from 'react';

const useProductHook = (productId) => {
  const getProductByIdSelector = useMemo(
    selectorsProducts.getProductByIdCreator,
    [],
  );

  const product = useSelector((state) => getProductByIdSelector(state, productId));

  return { product };
};

export default useProductHook;
