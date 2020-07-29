import React from 'react';
import PropTypes from 'prop-types';
import {
  Spin, Card, Button, Select, InputNumber, Modal, Popover,
} from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CloseOutlined } from '@ant-design/icons';

import styles from './product.scss';
import useProductHook from './hooks';

const Product = ({ productId }) => {
  const {
    storeProduct,
    loading,
    showModal,
    setShowModal,
    myShopLists,
    selectedShopList,
    setSelectedShopList,
    setQuantity,
    handleAddToShopList,
    addingItem,
    store,
  } = useProductHook(productId);

  return (
    <Spin size="large" spinning={loading}>
      {storeProduct ? (
        <Card
          size="big"
          bordered={false}
        >
          <Meta
            description={(
              <div className={styles.productWrapper}>
                <div className={styles.imageContainer}>
                  <img className={styles.imageContainer__image} alt="" src="https://placeimg.com/400/380/tech?t=1" />
                </div>
                <div className={styles.infoWrapper}>
                  <div className={`${styles.infoWrapper__title} ant-card-meta-title`}>
                    {storeProduct.product.name}
                  </div>
                  <div className={styles.infoWrapper__description}>
                    <span>
                      {storeProduct.product.description}
                    </span>
                  </div>
                  <div className={styles.infoWrapper__storeInfo}>
                    <div className={styles.addToList}>
                      <div className={styles.addToList__priceStockBlock}>
                        <div className={styles.addToList__price}>
                          { `${storeProduct.price} €` }
                        </div>
                        <div className={styles.stockIndicator} />
                      </div>
                      <Button
                        type="primary"
                        loading={addingItem}
                        onClick={() => setShowModal(true)}
                      >
                        Add to my list
                      </Button>
                    </div>
                    <div>
                      <Popover
                        title="Store address:"
                        placement="bottom"
                        trigger="click"
                        content={(
                          <>
                            <div>{store.address}</div>
                            <div>{`${store.city}, ${store.country}`}</div>
                          </>
                        )}
                      >
                        <div className={styles.popoverContent}>
                          <span>{'Sold by '}</span>
                          <Button className={styles.popoverContent__seller} type="link">{store.name}</Button>
                        </div>
                      </Popover>
                    </div>
                  </div>
                </div>
                <Modal
                  title="Add product to shopping list"
                  visible={showModal}
                  confirmLoading={addingItem}
                  onOk={() => handleAddToShopList(true)}
                  onCancel={() => handleAddToShopList(false)}
                  okText="Confirm"
                  destroyOnClose
                >
                  <div className={styles.modalContent}>
                    <div>
                      <span>
                        Add
                      </span>
                      <span className={styles.modalContent__prodName}>
                        {` ${storeProduct.product.name} `}
                      </span>
                      <InputNumber
                        className={styles.modalContent__quantity}
                        bordered={false}
                        min={1}
                        max={50}
                        defaultValue={1}
                        prefix={<CloseOutlined />}
                        formatter={(value) => `x ${value}`}
                        parser={(value) => value.replace('x ', '')}
                        onChange={(value) => setQuantity(value)}
                        disabled={addingItem}
                      />
                    </div>
                    <div>
                      <span>{' to '}</span>
                      <Select
                        className={styles.modalContent__shopList}
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
                      </Select>
                    </div>

                  </div>
                </Modal>
              </div>
            )}
          />
        </Card>
      ) : (
        <p>Product not found</p>
      )}
    </Spin>
  );
};

Product.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Product;
