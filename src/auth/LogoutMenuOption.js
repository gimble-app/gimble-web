import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { logOut } from './firebaseProvider';
import { logoutSuccess } from './actions';
import { MenuItem } from 'material-ui/Menu';

export const LogoutMenuOption = ({ handleClose, isLoggedIn, onLogoutSuccess }) =>
  isLoggedIn ? <MenuItem
    aria-label="logout"
    onClick={async () => {
      await logOut();
      onLogoutSuccess();
      handleClose();
    }}
    >
    Logout
  </MenuItem>
  :  <Redirect to="/login" />

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})
 
const mapDispatchToProps = {
  onLogoutSuccess: logoutSuccess
}

const ConnectedLogoutMenuOption = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutMenuOption)

export default ConnectedLogoutMenuOption;
