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
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware))
);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
