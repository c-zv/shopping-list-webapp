import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Spin,
} from 'antd';

import styles from './products.scss';
import useProductsHook from './hooks';

const Products = ({ goTo }) => {
  const { products, loading } = useProductsHook();
  return (
    <Spin size="large" spinning={loading}>
      <Row justify="start" gutter={[16, 16]}>
        {products.map((prod) => (
          <Col key={prod.id} justify="center">
            <Link to={goTo.PRODUCT(prod.id)}>
              <Card
                className={styles.card}
                hoverable
                bordered
                cover={<img alt="" src="http://placeimg.com/190/200/tech" className={styles.image} />}
              >
                {prod.product.name}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Spin>
  );
};

Products.propTypes = {
  goTo: PropTypes.shape({
    PRODUCT: PropTypes.func.isRequired,
  }).isRequired,
};

export default Products;
