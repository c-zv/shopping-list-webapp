import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actionsShopLists, selectorsShopLists } from 'state/shoppingLists';
import useShopListDrowerHook from './useShopListDrowerHook';

const generateRandomShopList = () => ({
  id: `${Math.round(Math.random() * 100000)}`,
  name: `SL_${Math.round(Math.random() * 1000).toString()}`,
  color: '#9C27B0',
  description: 'shopping list custom description',
});

const useShoppingListsHook = () => {
  const shopLists = useSelector(selectorsShopLists.getShopLists);
  const dispatch = useDispatch();

  const dispatchAddShopList = useCallback(
    (shopList) => {
      const newShopList = {
        name: shopList.name,
        description: shopList.description,
        id: `${Math.round(Math.random() * 100000)}`,
        color: shopList.color,
      };
      dispatch(actionsShopLists.addShoppingList(newShopList));
    },
    [dispatch],
  );

  const dispatchEditShopList = useCallback(
    (shopList) => dispatch(actionsShopLists.editShoppingList(shopList)),
    [dispatch],
  );

  const dispatchDeleteShopList = useCallback(
    (id) => dispatch(actionsShopLists.deleteShoppingList(id)),
    [dispatch],
  );

  const shopListsCtrl = {
    shopLists,
    createNewShopList: (shopList = undefined) => (
      shopList ? dispatchAddShopList(shopList) : dispatchAddShopList(generateRandomShopList())
    ),
    editShopList: (shopList) => (
      dispatchEditShopList(shopList)
    ),
    removeShopList: (id) => dispatchDeleteShopList(id),
  };

  const shopListDrowerCtrl = useShopListDrowerHook();

  return { shopListsCtrl, shopListDrowerCtrl };
};

export default useShoppingListsHook;
