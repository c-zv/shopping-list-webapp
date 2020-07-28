import {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/api';
import { useApiRequestHook, useAddShopListItemHook } from '~/hooks';
import { actionsStores, selectorsStores } from '~/state/stores';

const useProductHook = (productId) => {
  const {
    response, error, loading, execute: getProduct,
  } = useApiRequestHook(api.products.getOne);
  const storeProduct = response.data || undefined;
  useEffect(
    () => { getProduct([productId]); },
    [getProduct, productId],
  );

  const {
    myShopLists,
    addingItem,
    setQuantity,
    selectedShopList,
    setSelectedShopList,
    addShopListItem,
  } = useAddShopListItemHook();

  const [showModal, setShowModal] = useState(false);

  const handleAddToShopList = useCallback(
    async (submit) => {
      if (submit) {
        await addShopListItem(storeProduct.id);
        setShowModal(false);
      } else {
        setShowModal(false);
      }
    }, [addShopListItem, storeProduct, setShowModal],
  );

  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(actionsStores.storesAll.request()); },
    [dispatch],
  );

  const getStoreByIdSelector = useMemo(
    selectorsStores.getStoreByIdFn,
    [],
  );

  const store = useSelector((state) => (
    getStoreByIdSelector(state, storeProduct ? storeProduct.store_id : undefined)
  )) || {};

  return {
    storeProduct,
    error,
    loading,
    showModal,
    setShowModal,
    myShopLists,
    selectedShopList,
    setSelectedShopList,
    setQuantity,
    handleAddToShopList,
    addingItem,
    store,
  };
};

export default useProductHook;
