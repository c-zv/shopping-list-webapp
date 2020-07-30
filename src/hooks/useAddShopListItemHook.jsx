import {
  useState, useEffect, useMemo, useCallback,
} from 'react';

import api from '~/api';
import useApiRequestHook from './useApiRequestHook';

const useAddShopListItemHook = () => {
  const {
    response: shopListsResp, execute: getShopLists,
  } = useApiRequestHook(api.shopLists.getAll);
  const myShopLists = useMemo(() => shopListsResp.data || [], [shopListsResp]);
  useEffect(
    () => { getShopLists([]); },
    [getShopLists],
  );

  const {
    loading: addingItem, execute: addItem,
  } = useApiRequestHook(api.shopLists.addItem, 'Item was successfully added to shopping list');

  const [quantity, setQuantity] = useState(1);
  const [selectedShopList, setSelectedShopList] = useState(undefined);

  const addShopListItem = useCallback(
    async (storeProductId) => {
      await addItem([selectedShopList, storeProductId, quantity]);
      setQuantity(1);
    }, [addItem, quantity, selectedShopList],
  );

  return {
    myShopLists,
    addingItem,
    quantity,
    setQuantity,
    selectedShopList,
    setSelectedShopList,
    addShopListItem,
  };
};

export default useAddShopListItemHook;
