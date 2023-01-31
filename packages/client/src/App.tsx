import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GeneralRoutes } from './components/routes/GeneralRoutes';

import './scss/index.scss';

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    };

    //fetchServerData();
  }, []);
  return (
    <BrowserRouter>
      <GeneralRoutes />
    </BrowserRouter>
  );
}

export default App;
