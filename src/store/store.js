import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import { all } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';

import { userSaga } from './user/reducer'


const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

if (__DEV__) {
  const { logger } = require(`redux-logger`);
  middleWares.push(logger);
}

const composeEnhancers =
  typeof window === 'object' &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && __DEV__) ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    (middleWares) => middleWares;

const enhancer = composeEnhancers(
  applyMiddleware(...middleWares),
);

const store = createStore(
  combineReducers(reducers),
  enhancer
);

sagaMiddleware.run(function* () {
  yield all([
    userSaga()
  ]);
});

export default store;