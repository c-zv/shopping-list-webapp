import {
  useState, useEffect, useMemo, useCallback,
} from 'react';

import api from '~/api';
import useApiRequestHook from '~/api/useApiRequestHook';

const useProductsHook = () => {
  const {
    response, error, loading, execute: getAllProducts,
  } = useApiRequestHook(api.products.getAll);
  const products = useMemo(() => response.data || [], [response]);
  useEffect(
    () => { getAllProducts([]); },
    [getAllProducts],
  );

  const {
    response: shopListsResp, execute: getShopLists,
  } = useApiRequestHook(api.shopLists.getAll);
  const myShopLists = useMemo(() => shopListsResp.data || [], [shopListsResp]);
  useEffect(
    () => { getShopLists([]); },
    [getShopLists],
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedShopList, setSelectedShopList] = useState(undefined);
  const [lastUsedShopList, setLastUsedShopList] = useState(undefined);
  const [showProductModal, setShowProductModal] = useState([]);
  const [modalLoading, setModalLoading] = useState(false);

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
    }, [setShowModal, lastUsedShopList],
  );

  const handleAddToShopList = useCallback(
    (submit, index) => {
      if (submit) {
        console.log(`-> Submit! list: ${selectedShopList}, qty: ${quantity}, productName: ${products[index].product.name}`);
        setModalLoading(true);
        setTimeout(() => {
          setModalLoading(false);
          setShowModal(index, false);
          setQuantity(1);
          setLastUsedShopList(selectedShopList);
        }, 1000);
      } else {
        setShowModal(index, false);
      }
    }, [setShowModal, selectedShopList, quantity, setQuantity, products],
  );

  return {
    products,
    error,
    loading,
    showProductModal,
    modalLoading,
    openModal,
    handleAddToShopList,
    myShopLists,
    selectedShopList,
    setSelectedShopList,
    setQuantity,
  };
};

export default useProductsHook;
