import React from 'react';
import Button from "@material-ui/core/Button";
import {firebaseConnect} from 'react-redux-firebase';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {logout} from './actions';
import {selectIsLoggedIn} from './selectors';

export const LogoutMenuOption = ({ logout, isLoggedIn }) =>
  isLoggedIn
    ? <Button color="inherit" aria-label="logout" onClick={logout} variant="flat">Logout</Button>
    : <Redirect to="/login" />

const mapDispatchToProps = {
  logout
};

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
});

export default compose(
  firebaseConnect(),
  connect(mapStateToProps, mapDispatchToProps))(LogoutMenuOption);
