import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container, Card, Row, Col,
} from 'react-bootstrap';

import styles from './products.scss';
import useProductsHook from './hooks';

const Products = ({ goTo }) => {
  const { products, addProduct } = useProductsHook();
  return (
    <>
      <div>
        <button type="button" onClick={addProduct}> Create random product </button>
      </div>
      <Container fluid="xl">
        <Row xs={1} sm={1} md={1} lg={2} xl={3} noGutters>
          {products.map((prod) => (
            <Col as={Card} className={styles.card} key={prod.id}>
              <Card.Img className={styles.image} variant="top" src={prod.imageLink} />
              <Card.Body as={Link} to={goTo.PRODUCT(prod.id)}>
                <Card.Title>{prod.name}</Card.Title>
              </Card.Body>
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
};

Products.propTypes = {
  goTo: PropTypes.shape({
    PRODUCT: PropTypes.func.isRequired,
  }).isRequired,
};

export default Products;
