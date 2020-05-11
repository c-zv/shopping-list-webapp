import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectorsShopLists, actionsShopLists } from 'state/shoppingLists';

const useShoppingListHook = (shopListId) => {
  const dispatcher = useDispatch();

  const shopList = useSelector(selectorsShopLists.shopListsOne.data);
  const shopListRequesting = useSelector(selectorsShopLists.shopListsOne.requesting);

  useEffect(() => {
    dispatcher(actionsShopLists.shopListOne.request(shopListId));
  },
  [dispatcher, shopListId]);

  return { shopList, shopListRequesting };
};

export default useShoppingListHook;
