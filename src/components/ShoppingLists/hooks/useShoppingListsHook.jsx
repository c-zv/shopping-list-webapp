import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionsShopLists, selectorsShopLists } from 'state/shoppingLists';
import { actionsShopListCategories } from 'state/shoppingListCategories';
import useShopListDrawerHook from './useShopListDrawerHook';

const useShoppingListsHook = () => {
  const shopLists = useSelector(selectorsShopLists.shopListsAll.data);
  const shopListsRequesting = useSelector(selectorsShopLists.shopListsAll.requesting);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(actionsShopLists.shopListAll.request());
      dispatch(actionsShopListCategories.categoriesAll.request());
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
    shopListsRequesting,
    dispatchCreateShopList,
    dispatchEditShopList,
    dispatchDeleteShopList,
  };

  const shopListDrawerCtrl = useShopListDrawerHook();

  return { shopListsCtrl, shopListDrawerCtrl };
};

export default useShoppingListsHook;
