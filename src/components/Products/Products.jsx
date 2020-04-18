import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button, Card, Row, Col,
} from 'antd';

import styles from './products.scss';
import useProductsHook from './hooks';

const Products = ({ goTo }) => {
  const { products, addProduct } = useProductsHook();
  return (
    <>
      <div>
        <Button type="primary" onClick={addProduct}>
          Create random product
        </Button>
      </div>

      <Row justify="start" gutter={[16, 16]}>
        {products.map((prod) => (
          <Col key={prod.id} justify="center">
            <Link to={goTo.PRODUCT(prod.id)}>
              <Card
                className={styles.card}
                hoverable
                bordered
                cover={<img alt="" src={prod.imageLink} className={styles.image} />}
              >
                {prod.name}
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

Products.propTypes = {
  goTo: PropTypes.shape({
    PRODUCT: PropTypes.func.isRequired,
  }).isRequired,
};

export default Products;
