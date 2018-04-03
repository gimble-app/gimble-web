import React from 'react';
import { Redirect } from "react-router-dom";
import LogoutButton from './LogoutButton';

class LogoutScreen extends React.Component {

  state = {
    loggedIn: true
  }

  render() {
    return this.state.loggedIn ?
   <LogoutButton onLogout={ () => this.setState({ loggedIn: false })} />
    :  <Redirect to="/login" />
  }
}

export default LogoutScreen
