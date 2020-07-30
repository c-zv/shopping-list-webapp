import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import logo from '~/assets/logo.png';
import styles from './navigationBar.scss';

const { Header, Content, Footer } = Layout;

const NavigationBar = ({ pathTo, routes }) => {
  const history = useHistory();
  const [activeKey, setActiveKey] = useState(undefined);

  const handleHomeClick = () => {
    setActiveKey(undefined);
    history.push(pathTo.HOME());
  };

  const handleMenuClick = (key) => {
    setActiveKey(key);
  };

  return (
    <Layout className={styles.layout}>
      <Header>
        <button type="button" className={styles.logo} onClick={handleHomeClick}>
          <img src={logo} className={styles.logo__img} alt="logo" />
        </button>

        <Menu theme="dark" mode="horizontal" selectedKeys={[activeKey]} onClick={(e) => handleMenuClick(e.key)}>
          <Menu.Item key="1">
            <NavLink to={pathTo.PRODUCTS()}>Products</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to={pathTo.SHOPPING_LISTS()}>My shopping lists</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className={styles.layoutContent}>
          {routes}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <span>
          Shopping-list web application by
          <a href="https://github.com/c-zv"> Constantin Zavgorodnii</a>
        </span>
      </Footer>
    </Layout>
  );
};

NavigationBar.propTypes = {
  pathTo: PropTypes.shape({
    HOME: PropTypes.func.isRequired,
    PRODUCTS: PropTypes.func.isRequired,
    SHOPPING_LISTS: PropTypes.func.isRequired,
  }).isRequired,
  routes: PropTypes.element.isRequired,
};

export default NavigationBar;
