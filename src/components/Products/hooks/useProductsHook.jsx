import {
  useState, useEffect, useMemo, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import api from '~/api';
import { useApiRequestHook, useAddShopListItemHook } from '~/hooks';
import { actionsStores, selectorsStores } from '~/state/stores';

const useProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(
    () => { dispatch(actionsStores.storesAll.request()); },
    [dispatch],
  );

  const stores = useSelector(selectorsStores.storesAllData);

  const {
    response, error, loading, execute: getAllProducts,
  } = useApiRequestHook(api.products.getAll);
  const products = useMemo(() => response.data || [], [response]);
  useEffect(
    () => { getAllProducts([]); },
    [getAllProducts],
  );

  const {
    myShopLists,
    addingItem,
    setQuantity,
    selectedShopList,
    setSelectedShopList,
    addShopListItem,
  } = useAddShopListItemHook();

  const [lastUsedShopList, setLastUsedShopList] = useState(undefined);
  const [showProductModal, setShowProductModal] = useState([]);

  useEffect(() => {
    setShowProductModal(Array(products.length).fill(false));
  }, [products]);

  const setShowModal = useCallback(
    (index, value) => {
      const newShopProductModal = Array(showProductModal.length).fill(false);
      newShopProductModal[index] = value;
      setShowProductModal(newShopProductModal);
    }, [showProductModal, setShowProductModal],
  );

  const openModal = useCallback(
    (index) => {
      setShowModal(index, true);
      setSelectedShopList(lastUsedShopList);
    }, [setShowModal, lastUsedShopList, setSelectedShopList],
  );

  const handleAddToShopList = useCallback(
    async (submit, index) => {
      if (submit) {
        await addShopListItem(products[index].id);
        setShowModal(index, false);
        setLastUsedShopList(selectedShopList);
      } else {
        setShowModal(index, false);
      }
    }, [addShopListItem, setShowModal, selectedShopList, products],
  );

  const showStoreName = useCallback(
    (storeId) => {
      const store = stores.find((s) => s.id === storeId);
      return store ? store.name : '';
    },
    [stores],
  );

  return {
    products,
    error,
    loading,
    showProductModal,
    addingItem,
    openModal,
    handleAddToShopList,
    myShopLists,
    selectedShopList,
    setSelectedShopList,
    setQuantity,
    showStoreName,
  };
};

export default useProductsHook;
