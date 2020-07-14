import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectorsShopLists, actionsShopLists } from 'state/shoppingLists';
import { actionsShopListItems } from 'state/shoppingListItems';

const useShoppingListHook = (shopListId) => {
  const dispatch = useDispatch();

  const shopList = useSelector(selectorsShopLists.shopListsOne.data);
  const shopListRequesting = useSelector(selectorsShopLists.shopListsOne.requesting);

  useEffect(() => {
    dispatch(actionsShopLists.shopListOne.request(shopListId));
  },
  [dispatch, shopListId]);

  const dispatchUpdateShopListItem = useCallback(
    (item) => dispatch(actionsShopListItems.shopListItemUpdate.request(shopListId, item.id, item)),
    [dispatch, shopListId],
  );

  return { shopList, shopListRequesting, dispatchUpdateShopListItem };
};

export default useShoppingListHook;
