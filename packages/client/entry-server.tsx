import React from 'react';
import App from './src/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { createStoreWithDataFromServer } from './src/redux/store';

export function render(url, initialState) {
  const store = createStoreWithDataFromServer(initialState);

  return renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
}
