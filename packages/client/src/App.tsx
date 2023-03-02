import React, { useEffect } from 'react';

import { GeneralRoutes } from './components/routes/GeneralRoutes';
import * as Actions from './redux/actions';
import './scss/index.scss';
import { useAppDispatch } from './components/hook/AppUseSelectorAndDispathch';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Actions.authUser());
  }, []);
  return <GeneralRoutes />;
}

export default App;
