import './index.global.scss';
import ReactDOM from 'react-dom';
import ReactApp from 'components/ReactApp';

const renderApp = () => {
  ReactDOM.render(
    ReactApp(),
    document.getElementById('reactApp'),
  );
};

// react hot module is only used in development:
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('components/ReactApp', renderApp);
}

renderApp();
