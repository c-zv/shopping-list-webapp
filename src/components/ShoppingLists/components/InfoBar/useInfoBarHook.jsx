import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { selectorsShopListCategories } from '~/state/shoppingListCategories';

const useInfoBarHook = (shoppingList) => {
  const getCategoryByIdSelector = useMemo(
    selectorsShopListCategories.getCategoryByIdCreator,
    [],
  );

  const currentCategory = useSelector((store) => (
    getCategoryByIdSelector(store, shoppingList.category_id)
  ));

  return { currentCategory };
};

export default useInfoBarHook;
