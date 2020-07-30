import React from 'react';
import PropTypes from 'prop-types';
import {
  Spin, Card, Table, Button,
} from 'antd';
import { DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';

import UtilsFunc from '~/utils/func';
import useShoppingListHook from './hooks';
import styles from './shoppingList.scss';


const ShoppingList = ({ shopListId }) => {
  const {
    shopList, shopListRequesting, dispatchUpdateItem, dispatchRemoveItem,
  } = useShoppingListHook(shopListId);

  const storesSet = new Set();
  if (shopList) {
    shopList.items.forEach((item) => storesSet.add(item.store.name));
  }
  const storesNames = [...storesSet].map((storeName) => ({ text: storeName, value: storeName }));

  const columns = [
    {
      title: '',
      dataIndex: 'bought',
      key: 'bought',
      align: 'center',
      width: 40,
      filters: [
        {
          text: 'Bought',
          value: true,
        },
        {
          text: 'Missing',
          value: false,
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.bought === value,
      render: (value, record, _index) => (
        <Button
          type={value ? 'link' : 'default'}
          style={{ backgroundColor: value ? '#96e296' : 'white' }}
          shape="circle"
          icon={value ? <CheckOutlined /> : <CheckOutlined />}
          onClick={
            () => dispatchUpdateItem({ ...record, bought: !record.bought })
          }
        />
      ),
    },
    {
      title: 'Item',
      dataIndex: 'product',
      key: 'product',
      align: 'center',
      sorter: (a, b) => UtilsFunc.genericSort(a.product.name, b.product.name),
      sortDirections: ['descend', 'ascend'],
      render: (value, record, _index) => `${value.name} (x${record.qty_to_buy})`,
    },
    {
      title: 'Store',
      dataIndex: 'store',
      key: 'store',
      align: 'center',
      sorter: (a, b) => UtilsFunc.genericSort(a.store.name, b.store.name),
      sortDirections: ['descend', 'ascend'],
      filters: storesNames,
      filterMultiple: false,
      onFilter: (value, record) => record.store.name === value,
      render: (value) => value.name,
    },
    {
      title: '',
      key: 'actions',
      align: 'center',
      width: 40,
      render: (_value, record, _index) => (
        <Button
          type="danger"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={
            () => dispatchRemoveItem(record)
          }
        />
      ),
    },
  ];

  return (
    <Spin
      size="large"
      spinning={shopListRequesting}
      className="global-spinner"
      tip="Loading... API may be sleeping on heroku, so this can take several seconds"
    >
      { shopList ? (
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
                {shopList
                  && (
                    <Table
                      pagination={false}
                      dataSource={shopList.items}
                      columns={columns}
                      rowKey="id"
                      size="middle"
                      scroll={{ x: 'auto' }}
                    />
                  )}
              </>
            )}
          />
        </Card>
      ) : (
        <p>Shopping list not found</p>
      )}
    </Spin>
  );
};

ShoppingList.propTypes = {
  shopListId: PropTypes.string.isRequired,
};

export default ShoppingList;
