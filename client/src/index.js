import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';

import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { store, persistor, history } from './redux/store';

const customHistory = syncHistoryWithStore(history, store);
// ROUTER
ReactDOM.render(
  <Provider store={store}>
    <Router history={customHistory}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
