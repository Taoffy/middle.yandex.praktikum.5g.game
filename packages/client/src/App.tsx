import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GeneralRoutes } from './components/routes/GeneralRoutes';
import * as Actions from './redux/actions';
import './scss/index.scss';
import { useAppDispatch } from './components/hook/AppUseSelectorAndDispathch';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Actions.authUser());
  }, []);
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}/api`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    //fetchServerData();
  }, []);
  return (
    <GeneralRoutes />
  );
}

export default App;
