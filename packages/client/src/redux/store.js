import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { appReducer } from './app-reducer';

const reducers = combineReducers({
  app: appReducer,
});

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnchancers(applyMiddleware(thunk)));

export default store;
