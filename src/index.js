import 'typeface-roboto';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import registerServiceWorker from './registerServiceWorker';
import createStore from './store';
import App from './App';

render(
  <Provider store={createStore()}>
      <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
