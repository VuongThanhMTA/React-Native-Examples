import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux'

import Routes from '../Routes';

const navReducer = createNavigationReducer(Routes);
const appReducer = combineReducers({
  nav: navReducer,
});

const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const App = createReduxContainer(Routes);
const mapStateToProps = (state) => ({
  state: state.nav,
});
export const AppWithNavigationState = connect(mapStateToProps)(App);

export default store = createStore(
  appReducer,
  applyMiddleware(middleware),
);