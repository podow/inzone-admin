import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

import configureStore from './store';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component/>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  })
}

// Setting axios
axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
