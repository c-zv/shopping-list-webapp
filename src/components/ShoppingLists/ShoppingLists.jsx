import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Row, Col, Card, Spin,
} from 'antd';
import Meta from 'antd/lib/card/Meta';

import useShoppingListsHook from './hooks';
import { InfoBar, ShopListDrawer } from './components';
import styles from './shoppingLists.scss';

const ShoppingLists = ({ pathTo }) => {
  const { shopListsCtrl, shopListDrawerCtrl } = useShoppingListsHook();
  return (
    <>
      <div className={styles.button_container}>
        <Button type="primary" onClick={() => shopListDrawerCtrl.open()} className={styles.button_container__button} data-testid="newListBtn">
          New list
        </Button>
      </div>

      <ShopListDrawer
        drawerCtrl={shopListDrawerCtrl}
        submitShopList={
          shopListDrawerCtrl.shopListToEdit
            ? shopListsCtrl.dispatchEditShopList
            : shopListsCtrl.dispatchCreateShopList
          }
      />

      <Spin
        size="large"
        spinning={shopListsCtrl.shopListsRequesting}
        className="global-spinner"
        tip="Loading... API might be sleeping on heroku, so this can take several seconds"
      >
        <Row justify="start" gutter={[16, 16]} data-testid="shopListCards">
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
                    openShopListDrawer={shopListDrawerCtrl.open}
                    createShopList={shopListsCtrl.dispatchCreateShopList}
                    removeShopList={shopListsCtrl.dispatchDeleteShopList}
                  />
                )}
                data-testid="card"
              >
                <Link to={pathTo.SHOPPING_LIST(sl.id)}>
                  <Meta
                    title={sl.name}
                    description={sl.description}
                  />
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Spin>
    </>
  );
};

ShoppingLists.propTypes = {
  pathTo: PropTypes.shape({
    SHOPPING_LIST: PropTypes.func.isRequired,
  }).isRequired,
};

export default ShoppingLists;
