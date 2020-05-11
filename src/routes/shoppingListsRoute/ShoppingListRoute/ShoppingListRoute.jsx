import React from 'react';
import { useParams } from 'react-router-dom';

import ShoppingList from 'components/ShoppingList';

const ShoppingListRoute = () => {
  const { shopListId } = useParams();
  return (
    <ShoppingList shopListId={shopListId} />
  );
};

export default ShoppingListRoute;
