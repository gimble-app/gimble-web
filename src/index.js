import 'typeface-roboto';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './storage';
import rootReducer from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const TIME_BETWEEN_UPDATES = 1000;

store.subscribe(throttle(() => {
  saveState(store.getState())
}), TIME_BETWEEN_UPDATES);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
