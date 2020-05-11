import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import useShoppingListHook from './hooks';

const ShoppingList = ({ shopListId }) => {
  const { shopList, shopListRequesting } = useShoppingListHook(shopListId);
  console.log("Shop list: _> ", shopList);
  return (
    <Spin size="large" spinning={shopListRequesting}>
      { shopList && (
        <div>
          <div>{shopList.name}</div>
          <div>{shopList.description}</div>
          <div>{shopList.category.name}</div>
          <ul>
            {shopList.items.map((item) => (
              <li key={item.id}>
                <div>{item.id} / {item.qty_to_buy} / {item.store_product_id}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Spin>
  );
};

ShoppingList.propTypes = {
  shopListId: PropTypes.string.isRequired,
};

export default ShoppingList;
