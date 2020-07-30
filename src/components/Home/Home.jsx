import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

import styles from './home.scss';

const Home = () => (
  <Card
    size="big"
    bordered={false}
  >
    <Meta
      title={(
        <div className={`ant-card-meta-title ${styles.title}`}>
          Welcome to Shopping list web app!
        </div>
      )}
      description={(
        <div>
          <p>
            This web application was created for learning purposes.
            I wanted to create a responsive React application to explore React Hooks and
            some other libraries (Ant-desing, Redux-saga, Jest, React Testing Library, etc.),
            as well as play with project file structure.
            I was also interested in exploring Webpack,
            so I ended up by creating the project configuration from scratch
            which includes different builds for development and production environments,
            configuration of CSS modules (with SASS),
            and usage of different loaders (babel-loader, file-loader, etc.).
          </p>
          <p>
            The idea of this application is to allow the user to manage its shopping lists.
          </p>
          <p>
            Products page shows all the products availvable in different stores,
            and allows to (i) add a product to any shopping list
            and (ii) open a product specific page.
          </p>
          <p>
            My shopping lists page shows all the shopping lists and allows
            to perform a set of actions to manipulate each list (create, edit, delete, duplicate),
            as well as open a shopping list specific page where it is possible
            to manipulate all the products added to this list
            (order, filter, mark as bought or remove).
          </p>

          <p>
            All the data (names, descriptions, numbers) were generated using Faker library.
            <br />
            All the images are requested from
            <a href="https://placeimg.com/">https://placeimg.com/</a>
          </p>

        </div>
      )}
    />
  </Card>
);

export default Home;
