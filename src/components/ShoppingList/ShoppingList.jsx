import React from 'react';
import PropTypes from 'prop-types';
import {
  Spin, Card, Checkbox,
} from 'antd';
import Meta from 'antd/lib/card/Meta';

import useShoppingListHook from './hooks';
import styles from './shoppingList.scss';


const ShoppingList = ({ shopListId }) => {
  const {
    shopList, shopListRequesting, dispatchUpdateShopListItem,
  } = useShoppingListHook(shopListId);
  console.log("Shop list: _> ", shopList);
  return (
    <Spin size="large" spinning={shopListRequesting}>
      { shopList && (
        <Card
          size="big"
          bordered={false}
        >
          <Meta
            title={(
              <div className={styles.title}>
                <div className="ant-card-meta-title">{shopList.name}</div>
                <div
                  className={styles.categoryBar}
                  style={{ backgroundColor: shopList.category.color }}
                />
              </div>
            )}
            description={(
              <>
                <div>{shopList.description}</div>
                <ul className={styles.shopList}>
                  {shopList.items.map((item) => (
                    <li key={item.id}>
                      <Checkbox
                        className={styles.listItem__checkbox}
                        checked={item.bought}
                        onChange={
                          () => dispatchUpdateShopListItem({ ...item, bought: !item.bought })
                        }
                      />
                      <span
                        className={
                          item.bought ? styles.listItem__checked : styles.listItem__unchecked
                        }
                      >
                        {item.id} (x{item.qty_to_buy})
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          />
        </Card>
      )}
    </Spin>
  );
};

ShoppingList.propTypes = {
  shopListId: PropTypes.string.isRequired,
};

export default ShoppingList;
