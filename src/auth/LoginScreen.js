import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getFirebaseAuth } from './firebaseProvider';
import { loginSuccess } from './actions';
import ToolbarTitleText from '../common/ToolbarTitleText';
import Page from '../common/Page';

export class LoginScreen extends React.Component {

  uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: this.props.onLogin
      }
  }

  render() {
    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <ToolbarTitleText>Gimble</ToolbarTitleText>
          </Toolbar>
        </AppBar>
        <Page>
        {
          !this.props.isLoggedIn
            ? <StyledFirebaseAuth
              className="firebaseOverride"
              uiConfig={this.uiConfig}
              firebaseAuth={getFirebaseAuth()}/>
            :  <Redirect to="/" /> }
        </Page>
      </Fragment>)
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})
 
const mapDispatchToProps = dispatch => ({
  onLogin: () => dispatch(loginSuccess())
})

const ConnectedLoginScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)

export default ConnectedLoginScreen;
