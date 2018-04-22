import React from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { logout } from './actions';
import { selectIsLoggedIn } from './reducers';

import { MenuItem } from 'material-ui/Menu';

export const LogoutMenuOption = ({ handleClose, logout, isLoggedIn }) =>
  <MenuItem
    aria-label="logout"
    onClick={async () => {
      handleClose();
      await logout();
    }}
  >
    { !isLoggedIn
      ? <Redirect to="/login" />
      : "Logout" }
  </MenuItem>
 
const mapDispatchToProps = {
  logout
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps))(LogoutMenuOption);
