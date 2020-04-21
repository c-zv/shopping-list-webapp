import React from 'react';
import {
  Button, Row, Col, Card,
} from 'antd';
import Meta from 'antd/lib/card/Meta';

import useShoppingListsHook from './hooks';
import { InfoBar } from './components';
import styles from './shoppingLists.scss';

const ShoppingLists = () => {
  const { shopLists, addShopList } = useShoppingListsHook();
  return (
    <>
      <div className={styles.button_container}>
        <Button type="primary" onClick={addShopList}>
          Create random Shop list
        </Button>
      </div>
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
