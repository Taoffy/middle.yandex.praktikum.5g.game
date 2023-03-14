import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
  PreloadedState,
} from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import { appReducer } from './app-reducer';
import { forumReducer } from './forum/forum-reducer';

import { Store } from './types';

const reducers = combineReducers({
  app: appReducer,
  forum: forumReducer,
});
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __PRELOADED_STATE__?: Store;
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

export function createStoreWithDataFromServer(
  initialState: PreloadedState<RootState>
) {
  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk as ThunkMiddleware))
  );
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
