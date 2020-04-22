import React from 'react';
import {
  Button, Row, Col, Card,
} from 'antd';
import Meta from 'antd/lib/card/Meta';

import useShoppingListsHook from './hooks';
import { InfoBar, ShopListDrower } from './components';
import styles from './shoppingLists.scss';

const ShoppingLists = () => {
  const { shopListsCtrl, shopListDrowerCtrl } = useShoppingListsHook();
  return (
    <>
      <div className={styles.button_container}>
        <Button type="primary" onClick={() => shopListsCtrl.createNewShopList()} className={styles.button_container__button}>
          Create random Shop list
        </Button>
        <Button type="primary" onClick={() => shopListDrowerCtrl.open()} className={styles.button_container__button}>
          New list
        </Button>
      </div>

      <ShopListDrower
        drowerCtrl={shopListDrowerCtrl}
        submitShopList={
          shopListDrowerCtrl.shopListToEdit
            ? shopListsCtrl.editShopList
            : shopListsCtrl.createNewShopList
          }
      />

      <Row justify="start" gutter={[16, 16]}>
        {shopListsCtrl.shopLists.map((sl) => (
          <Col justify="center" key={sl.id}>
            <Card
              size="small"
              hoverable
              bordered={false}
              className={styles.card}
              cover={(
                <InfoBar
                  shoppingList={sl}
                  openShopListDrower={shopListDrowerCtrl.open}
                  createNewShopList={shopListsCtrl.createNewShopList}
                  removeShopList={shopListsCtrl.removeShopList}
                />
              )}
            >
              <Meta
                title={sl.name}
                description={sl.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ShoppingLists;
