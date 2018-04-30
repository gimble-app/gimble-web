import 'typeface-roboto';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider } from 'material-ui/styles';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from 'material-ui/styles';
import initStore from './store';
import App from './App';
import theme from './theme';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const { store, history } = initStore();

render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App history={history}/>
      </MuiThemeProvider>
    </Provider>
  </JssProvider>,
document.getElementById('root')
);

registerServiceWorker();
