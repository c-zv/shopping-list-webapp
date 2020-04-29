import { useState } from 'react';

const useShopListDrawerHook = () => {
  const [showCreateDrawer, setShowCreateDrawer] = useState({
    visible: false,
    shopListToEdit: undefined,
  });

  const shopListDrawerCtrl = {
    visible: showCreateDrawer.visible,
    shopListToEdit: showCreateDrawer.shopListToEdit,
    open: (shopListToEdit = undefined) => (
      setShowCreateDrawer({ visible: true, shopListToEdit })
    ),
    close: () => (
      setShowCreateDrawer({ visible: false, shopListToEdit: undefined })
    ),
  };

  return shopListDrawerCtrl;
};

export default useShopListDrawerHook;
