import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { appReducer } from './app-reducer';
const reducers = combineReducers({
  app: appReducer,
});
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnchancers = compose(
  typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => f
);

const store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(thunk as ThunkMiddleware))
);

export default store;
