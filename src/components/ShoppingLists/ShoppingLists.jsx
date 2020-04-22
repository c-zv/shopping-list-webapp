import React from 'react';
import {
  Button, Row, Col, Card,
} from 'antd';
import Meta from 'antd/lib/card/Meta';

import useShoppingListsHook from './hooks';
import { InfoBar, ShopListDrower } from './components';
import styles from './shoppingLists.scss';

const ShoppingLists = () => {
  const { shopLists, generateNewShopList, shopListDrowerCtrl } = useShoppingListsHook();
  return (
    <>
      <div className={styles.button_container}>
        <Button type="primary" onClick={generateNewShopList} className={styles.button_container__button}>
          Create random Shop list
        </Button>
        <Button type="primary" onClick={shopListDrowerCtrl.show} className={styles.button_container__button}>
          New list
        </Button>
      </div>

      <ShopListDrower drowerCtrl={shopListDrowerCtrl} />

      <Row justify="start" gutter={[16, 16]}>
        {shopLists.map((sl) => (
          <Col justify="center" key={sl.id}>
            <Card
              size="small"
              hoverable
              bordered={false}
              className={styles.card}
              cover={<InfoBar color={sl.color} countBought={2} countMissing={4} />}
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
