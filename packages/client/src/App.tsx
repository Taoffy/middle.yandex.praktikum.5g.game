import React, { useEffect } from 'react';

import { Store } from './redux/types';
import * as Actions from './redux/actions';
import {
  useAppDispatch,
  useAppSelector,
} from './components/hooks/AppUseSelectorAndDispathch';

import { GeneralRoutes } from './components/routes/GeneralRoutes';

import './scss/index.scss';

function App() {
  const dispatch = useAppDispatch();

  const isInitialApp = useAppSelector((state: Store) => state.app.isInitialApp);

  useEffect(() => {
    if (!isInitialApp) {
      dispatch(Actions.setInitialApp());
    }
  }, [dispatch, isInitialApp]);

  return isInitialApp ? <GeneralRoutes /> : <p>Загрузка...</p>;
}

export default App;
