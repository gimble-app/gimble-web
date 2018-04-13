import React from 'react';
import { connect } from 'react-redux';
import { logout } from './actions';
import { MenuItem } from 'material-ui/Menu';

export const LogoutMenuOption = ({ handleClose, logout }) =>
  <MenuItem
    aria-label="logout"
    onClick={async () => {
      handleClose();
      await logout();
    }}
  >
    Logout
  </MenuItem>
 
const mapDispatchToProps = {
  logout
};

const ConnectedLogoutMenuOption = connect(
  () => ({}),
  mapDispatchToProps
)(LogoutMenuOption)

export default ConnectedLogoutMenuOption;
