import 'typeface-roboto';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import initStore from './store';
import App from './App';
import theme from './theme';

const { store, history } = initStore();

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App history={history}/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
