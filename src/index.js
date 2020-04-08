import './index.global.scss';
import ReactDOM from 'react-dom';
import ReactApp from 'components/ReactApp';

ReactDOM.render(
  ReactApp(),
  document.getElementById('reactApp'),
);

// react hot module is only used in development:
if (module.hot) {
  module.hot.accept();
}
