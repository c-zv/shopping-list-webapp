import { useSelector } from 'react-redux';

import { selectorsShopLists } from 'state/shoppingLists';
import useShopListDrowerHook from './useShopListDrowerHook';

const generateRandomShopList = () => ({
  id: `${Math.round(Math.random() * 100000)}`,
  name: `SL_${Math.round(Math.random() * 1000).toString()}`,
  color: '#9C27B0',
  description: 'shopping list custom description',
});

const useShoppingListsHook = () => {
  const shopLists = useSelector(selectorsShopLists.getShopLists);

  const shopListDrowerCtrl = useShopListDrowerHook();

  const generateNewShopList = () => shopListDrowerCtrl.createShopList(generateRandomShopList());

  return { shopLists, generateNewShopList, shopListDrowerCtrl };
};

export default useShoppingListsHook;
