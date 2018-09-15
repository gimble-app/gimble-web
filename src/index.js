import React from 'react';
import './theme/globalStyle';
import './polyfills';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import initStore from './store';
import App from './App';
import theme from './theme/theme';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
jss.options.insertionPoint = document.getElementById('jss-insertion-point');
const store = initStore();

render(
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </Provider>
  </JssProvider>,
document.getElementById('root')
);

registerServiceWorker();
