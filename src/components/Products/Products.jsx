import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, Spin, Button, Select, InputNumber,
} from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from './products.scss';
import useProductsHook from './hooks';

const Products = ({ goTo }) => {
  const {
    products,
    loading,
    showProductModal,
    addingItem,
    openModal,
    handleAddToShopList,
    myShopLists,
    selectedShopList,
    setSelectedShopList,
    setQuantity,
  } = useProductsHook();

  return (
    <Spin size="large" spinning={loading}>
      <div className={styles.productsWrapper}>
        {products.map((prod, index) => (
          <Card
            key={prod.id}
            className={styles.card}
            hoverable
            bordered={false}
            bodyStyle={{ padding: '0rem', height: '100%' }}
          >
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <img alt="" src={`http://placeimg.com/220/260/tech?t=${prod.id}`} className={styles.imageContainer__image} />
                <div className={styles.imageContainer__overlay}>
                  {!showProductModal[index] && (
                    <Button
                      type="link"
                      shape="round"
                      className={styles.imageContainer__overlay__button}
                      disabled={addingItem}
                      onClick={() => openModal(index)}
                    >
                      Add to shopping list
                    </Button>
                  )}
                  {showProductModal[index] && (
                    <div className={styles.selectList}>
                      <Select
                        className={styles.selectList__select}
                        onChange={(value) => setSelectedShopList(value)}
                        placeholder="Shopping list"
                        value={selectedShopList}
                        allowClear
                        disabled={addingItem}
                      >
                        {myShopLists.map((shopList) => (
                          <Select.Option value={shopList.id} key={shopList.id}>
                            {shopList.name}
                          </Select.Option>
                        ))}
                        <Select.Option value={33} key={4874}>
                          Random super large name
                        </Select.Option>
                      </Select>
                      <InputNumber
                        bordered={false}
                        min={1}
                        max={50}
                        defaultValue={1}
                        prefix={<CloseOutlined />}
                        formatter={(value) => `x ${value}`}
                        parser={(value) => value.replace('x ', '')}
                        className={styles.selectList__quantity}
                        onChange={(value) => setQuantity(value)}
                        disabled={addingItem}
                      />
                      <div className={styles.selectList__buttons}>
                        <Button
                          type="primary"
                          onClick={() => handleAddToShopList(true, index)}
                          loading={addingItem}
                          disabled={!selectedShopList}
                        >
                          Add
                        </Button>
                        <Button
                          type="danger"
                          onClick={() => handleAddToShopList(false, index)}
                          disabled={addingItem}
                        >
                          Cancel
                        </Button>

                      </div>
                    </div>
                  )}
                </div>

              </div>
              <Link to={goTo.PRODUCT(prod.id)} className={styles.cardInfo}>
                <span className={styles.cardInfo__name}>
                  {prod.product.name}
                </span>
                <span className={styles.cardInfo__price}>
                  { `${prod.price} €` }
                </span>
                <div className={styles.cardInfo__seller}>
                  <span className={styles.cardInfo__sellerName}>
                    { `Store ${prod.store_id}` }
                  </span>
                  <span className={styles.stockIndicator} />
                </div>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Spin>
  );
};

Products.propTypes = {
  goTo: PropTypes.shape({
    PRODUCT: PropTypes.func.isRequired,
  }).isRequired,
};

export default Products;
