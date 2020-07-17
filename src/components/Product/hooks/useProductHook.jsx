import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { selectorsProducts } from '~/state/products';

const useProductHook = (productId) => {
  const getProductByIdSelector = useMemo(
    selectorsProducts.getProductByIdCreator,
    [],
  );

  const product = useSelector((state) => getProductByIdSelector(state, productId));

  return { product };
};

export default useProductHook;
