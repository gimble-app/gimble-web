import React from 'react';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getFirebaseAuth } from './firebaseProvider';
import { loginSuccess } from './actions';

export class LoginScreen extends React.Component {

  uiConfig = {
      signInFlow: 'redirect',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: this.props.onLogin
      }
  }

  render() {
    return !this.props.isLoggedIn ?
      <StyledFirebaseAuth
        uiConfig={this.uiConfig}
        firebaseAuth={getFirebaseAuth()}
      />
    :  <Redirect to="/" />
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
