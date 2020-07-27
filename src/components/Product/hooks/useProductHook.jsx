import { useState, useEffect, useCallback } from 'react';

import api from '~/api';
import { useApiRequestHook, useAddShopListItemHook } from '~/hooks';

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
  };
};

export default useProductHook;
