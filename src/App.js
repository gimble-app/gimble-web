import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firebaseConnect} from "react-redux-firebase";
import {ConnectedRouter} from 'react-router-redux';
import {withTheme} from "material-ui/styles";
import styled from "styled-components";
import Navigation from './navigation/Navigation';
import {selectIsLoggedIn} from './auth/selectors';
import Notifier from './notifications/Notifier';

const StyledAppRoot = withTheme()(styled.div`
  background: ${props => props.theme.palette.common.grey || 'red' };
  min-height: 100vh;
`);

export const App = ({ isLoggedIn, history }) => (
  <StyledAppRoot>
    <ConnectedRouter history={history}>
      <Navigation isLoggedIn={isLoggedIn}/>
    </ConnectedRouter>
    <Notifier />
  </StyledAppRoot>
);

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App)
