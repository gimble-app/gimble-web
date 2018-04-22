import 'typeface-roboto';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';

import initStore from './store';
import App from './App';

const { store, history } = initStore();

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
