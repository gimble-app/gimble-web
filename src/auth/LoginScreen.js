import React, { Fragment } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom';
import { selectIsLoggedIn, selectIsLoaded } from './reducers';
import { login } from './actions';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Page from '../common/Page';
import ToolbarTitleText from '../common/ToolbarTitleText';

export const LoginScreen = ({ isLoaded, isLoggedIn, login }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <ToolbarTitleText>Gimble</ToolbarTitleText>
      </Toolbar>
    </AppBar>
    <Page>
    <div>
      {
        !isLoaded
        ? <span>Loading...</span>
        : !isLoggedIn
          ? <button
                onClick={login}
              >Login With Google</button>
          : <Redirect to="/" />
      }
    </div>
  </Page>
</Fragment>)

const mapDispatchToProps = {
  login
};

const mapStateToProps = state => ({
  isLoaded: selectIsLoaded(state),
  isLoggedIn: selectIsLoggedIn(state),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps)
)(LoginScreen)
