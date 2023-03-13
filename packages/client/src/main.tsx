import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStoreWithDataFromServer } from './redux/store';

const serverState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = createStoreWithDataFromServer(serverState as any);

const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

if (import.meta.env.SSR) {
  ReactDOM.hydrateRoot(document.getElementById('root') as HTMLDivElement, app);
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    app
  );
}
