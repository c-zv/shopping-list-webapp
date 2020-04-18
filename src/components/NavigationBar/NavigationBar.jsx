import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink, Link,
} from 'react-router-dom';
import { Layout, Menu } from 'antd';

import styles from './navigationBar.scss';

const { Header, Content, Footer } = Layout;

const NavigationBar = ({ goTo, router }) => (
  <Layout>
    <Header>
      <Link to={goTo.HOME()} className={styles.logo} />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <NavLink to={goTo.PRODUCTS()}>Products</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to={goTo.SHOPPING_LISTS()}>My shopping lists</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to={goTo.SETTINGS()}>Settings</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
    <Content>
      <div className={styles.layoutContent}>
        {router}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      <span>
        Shopping-list web application by
        <a href="https://github.com/c-zv"> c-zv</a>
      </span>
    </Footer>
  </Layout>
);

NavigationBar.propTypes = {
  goTo: PropTypes.shape({
    HOME: PropTypes.func.isRequired,
    PRODUCTS: PropTypes.func.isRequired,
    SHOPPING_LISTS: PropTypes.func.isRequired,
    SETTINGS: PropTypes.func.isRequired,
  }).isRequired,
  router: PropTypes.element.isRequired,
};

export default NavigationBar;
