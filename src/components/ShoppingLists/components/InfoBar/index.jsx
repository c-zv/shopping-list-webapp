import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import styles from './infoBar.scss';

const InfoBar = ({
  shoppingList, openShopListDrawer, createNewShopList, removeShopList,
}) => (
  <div className={styles.bar}>
    <div className={styles.bar__badges}>
      <Badge style={{ backgroundColor: styles.bought_color }} count={33} title="Number of bought products" />
      <Badge style={{ backgroundColor: styles.missing_color }} count={12} title="Number of missing products" />
    </div>
    <div className={styles.bar__color} style={{ backgroundColor: shoppingList.color }} />
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
          <Menu.Item onClick={() => (createNewShopList(shoppingList))}>
            Make a copy
          </Menu.Item>
        </Menu>
      )}
    >
      <MoreOutlined />
    </Dropdown>
  </div>
);

InfoBar.propTypes = {
  shoppingList: PropTypes.shape({
    id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  openShopListDrawer: PropTypes.func.isRequired,
  createNewShopList: PropTypes.func.isRequired,
  removeShopList: PropTypes.func.isRequired,
};

export default InfoBar;
