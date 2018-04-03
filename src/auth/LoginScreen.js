import React from 'react';
import { Redirect } from "react-router-dom";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setAuthCallback, getUiConfig, getFirebaseAuth } from './firebaseProvider';

class LoginScreen extends React.Component {

  state = {
    loggedIn: false
  };

  componentDidMount() {
    setAuthCallback(user => {
        if(user) {
          this.setState(
            {loggedIn: true},
            () => {this.props.onChange(true)}
          );
        }
      });
  }

  render() {
    return !this.state.loggedIn ?
      <StyledFirebaseAuth
        uiConfig={getUiConfig()}
        firebaseAuth={getFirebaseAuth()}
      />
    :  <Redirect to="/" />
  }
}

export default LoginScreen
