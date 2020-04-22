import { useState } from 'react';

const useShopListDrowerHook = () => {
  const [showCreateDrower, setShowCreateDrower] = useState({
    visible: false,
    shopListToEdit: undefined,
  });

  const shopListDrowerCtrl = {
    visible: showCreateDrower.visible,
    shopListToEdit: showCreateDrower.shopListToEdit,
    open: (shopListToEdit = undefined) => (
      setShowCreateDrower({ visible: true, shopListToEdit })
    ),
    close: () => (
      setShowCreateDrower({ visible: false, shopListToEdit: undefined })
    ),
  };

  return shopListDrowerCtrl;
};

export default useShopListDrowerHook;
