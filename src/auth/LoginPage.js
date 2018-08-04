import React  from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom';
import { selectIsLoggedIn, selectIsLoaded } from './selectors';
import { login } from './actions';
import Page from '../common/Page';
import BigRedButton from "../common/buttons/BigRedButton";

export const LoginPage = ({ isLoaded, isLoggedIn, login }) => (
  <Page>
    <div>
      {
        !isLoaded
        ? <span>Loading...</span>
        : !isLoggedIn
          ? <BigRedButton onClick={login}>login</BigRedButton>
          : <Redirect to="/" />
      }
    </div>
  </Page>
);

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
)(LoginPage)
