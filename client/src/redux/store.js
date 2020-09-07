import { createStore, applyMiddleware } from 'redux';
import {persistStore} from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history'
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory()

const middlewares = [routerMiddleware(history),sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
export const persistor  = persistStore(store);
export default {store,persistor};
