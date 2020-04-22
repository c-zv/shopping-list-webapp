import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import styles from './infoBar.scss';

const menu = (
  <Menu>
    <Menu.Item onClick={() => {console.log("Rename button!")}}>
      Rename
    </Menu.Item>
    <Menu.Item onClick={() => {console.log("Del button!")}}>
      Delete
    </Menu.Item>
    <Menu.Item onClick={() => {console.log("Copy button!")}}>
      Make a copy
    </Menu.Item>
  </Menu>
);

const InfoBar = ({ color, countBought, countMissing }) => (
  <div className={styles.bar}>
    <div className={styles.bar__badges}>
      <Badge style={{ backgroundColor: styles.bought_color }} count={countBought} title="Number of bought products" />
      <Badge style={{ backgroundColor: styles.missing_color }} count={countMissing} title="Number of missing products" />
    </div>
    <div className={styles.bar__color} style={{ backgroundColor: color }} />
    <Dropdown className={styles.bar__dropdown} overlay={menu} trigger={['click']}>
      <MoreOutlined />
    </Dropdown>
  </div>
);

InfoBar.propTypes = {
  color: PropTypes.string.isRequired,
  countBought: PropTypes.number.isRequired,
  countMissing: PropTypes.number.isRequired,
};

export default InfoBar;
