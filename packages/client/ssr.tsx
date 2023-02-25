import App from './src/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export function render(url, context) {
  return renderToString(
    <StaticRouter location={url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
}
