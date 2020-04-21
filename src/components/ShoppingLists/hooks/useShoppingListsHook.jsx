import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectorsShopLists, actionsShopLists } from 'state/shoppingLIsts';

const useShoppingListsHook = () => {
  const shopLists = useSelector(selectorsShopLists.getShopLists);
  const dispatch = useDispatch();

  const generateNewShopList = () => ({
    id: `${Math.round(Math.random() * 100000)}`,
    name: `SL_${Math.round(Math.random() * 1000).toString()}`,
    color: '#9C27B0',
    description: 'shopping list custom description',
  });

  const addShopList = useCallback(
    () => (dispatch(actionsShopLists.addShoppingList(generateNewShopList()))),
    [dispatch],
  );

  return { shopLists, addShopList };
};

export default useShoppingListsHook;
