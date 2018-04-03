import React from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { logOut } from './firebaseProvider';
import { logoutSuccess } from './actions';

export const LogoutButton = ({ isLoggedIn, onLogout }) =>
  isLoggedIn ?
  <Button
    color="secondary"
    aria-label="logout"
    onClick={() => logOut(onLogout)}
  >Log out
  </Button>
:  <Redirect to="/login" />

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})
 
const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logoutSuccess())
})

const ConnectedLogoutButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutButton)

export default ConnectedLogoutButton;
