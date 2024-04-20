import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import app from './reducers';

import createSagaMiddleware from 'redux-saga';
import dataSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(app, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(dataSaga);
  return store;
};

export default configureStore;
