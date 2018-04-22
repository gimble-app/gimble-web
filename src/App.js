import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import Navigation from './navigation/Navigation';
import { selectIsLoggedIn } from './auth/reducers';
import { ConnectedRouter } from 'react-router-redux';

export const App = ({classes, isLoggedIn, history }) => (
  <ConnectedRouter history={history}>
    <Navigation isLoggedIn={isLoggedIn}/>
  </ConnectedRouter>
)

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
})

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App)
