import { useSelector } from 'react-redux';

import { selectorsShopListCategories } from 'state/shoppingListCategories';

const useInfoBarHook = (shoppingList) => {
  const currentCategory = useSelector((store) => (
    selectorsShopListCategories.getCategoryByIdCreator(store, shoppingList.category_id)
  ));

  return { currentCategory };
};

export default useInfoBarHook;
