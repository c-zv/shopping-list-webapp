import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import styles from './infoBar.scss';
import useInfoBarHook from './useInfoBarHook';

const InfoBar = ({
  shoppingList, openShopListDrawer, createShopList, removeShopList,
}) => {
  const { currentCategory } = useInfoBarHook(shoppingList);

  return (
    <div className={styles.bar}>
      <div className={styles.bar__badges}>
        <Badge style={{ backgroundColor: styles.bought_color }} showZero count={shoppingList.num_bought_items} title="Number of bought products" />
        <Badge style={{ backgroundColor: styles.missing_color }} showZero count={shoppingList.num_missing_items} title="Number of missing products" />
      </div>
      <div
        className={styles.bar__color}
        style={currentCategory && { backgroundColor: currentCategory.color }}
      />
      <Dropdown
        className={styles.bar__dropdown}
        trigger={['click']}
        overlay={(
          <Menu>
            <Menu.Item onClick={() => (openShopListDrawer(shoppingList))}>
              Edit
            </Menu.Item>
            <Menu.Item onClick={() => (removeShopList(shoppingList.id))}>
              Delete
            </Menu.Item>
            <Menu.Item onClick={() => (createShopList(shoppingList))}>
              Make a copy
            </Menu.Item>
          </Menu>
        )}
      >
        <MoreOutlined />
      </Dropdown>
    </div>
  );
};

InfoBar.propTypes = {
  shoppingList: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
    num_bought_items: PropTypes.number.isRequired,
    num_missing_items: PropTypes.number.isRequired,
  }).isRequired,
  openShopListDrawer: PropTypes.func.isRequired,
  createShopList: PropTypes.func.isRequired,
  removeShopList: PropTypes.func.isRequired,
};

export default InfoBar;
