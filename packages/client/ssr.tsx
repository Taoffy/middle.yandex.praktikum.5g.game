import App from './src/App'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import { Provider } from 'react-redux'
import store from './src/redux/store'

export function render() {
  return renderToString(
    <StaticRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )
}
