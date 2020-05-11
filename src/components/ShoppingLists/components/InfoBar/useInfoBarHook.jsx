import { useSelector } from 'react-redux';

import { selectorsShopListCategories } from 'state/shoppingListCategories';
import { useMemo } from 'react';

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
