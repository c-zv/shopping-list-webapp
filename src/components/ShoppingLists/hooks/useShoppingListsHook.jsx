import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionsShopLists, selectorsShopLists } from 'state/shoppingLists';
import useShopListDrawerHook from './useShopListDrawerHook';

const useShoppingListsHook = () => {
  const shopLists = useSelector(selectorsShopLists.shopListsAll);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(actionsShopLists.shopListAll.request());
    },
    [dispatch],
  );

  const dispatchCreateShopList = useCallback(
    (shopList) => {
      dispatch(actionsShopLists.shopListCreate.request(shopList));
    },
    [dispatch],
  );

  const dispatchEditShopList = useCallback(
    (shopList) => dispatch(actionsShopLists.shopListUpdate.request(shopList.id, shopList)),
    [dispatch],
  );

  const dispatchDeleteShopList = useCallback(
    (id) => dispatch(actionsShopLists.shopListDelete.request(id)),
    [dispatch],
  );

  const shopListsCtrl = {
    shopLists,
    dispatchCreateShopList,
    dispatchEditShopList,
    dispatchDeleteShopList,
  };

  const shopListDrawerCtrl = useShopListDrawerHook();

  return { shopListsCtrl, shopListDrawerCtrl };
};

export default useShoppingListsHook;
