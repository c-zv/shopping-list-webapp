import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { actionsShopLists } from 'state/shoppingLists';

const useShopListDrowerHook = () => {
  const [showCreateDrower, setShowCreateDrower] = useState(false);
  const dispatch = useDispatch();

  const createShopList = useCallback(
    (shopList) => {
      const newShopList = {
        name: shopList.name,
        description: shopList.description,
        id: `${Math.round(Math.random() * 100000)}`,
        color: '#9C27B1',
      };
      dispatch(actionsShopLists.addShoppingList(newShopList));
    },
    [dispatch],
  );

  const shopListDrowerCtrl = {
    visible: showCreateDrower,
    show: () => setShowCreateDrower(true),
    close: () => setShowCreateDrower(false),
    createShopList: (shopList) => createShopList(shopList),
  };

  return shopListDrowerCtrl;
};

export default useShopListDrowerHook;
