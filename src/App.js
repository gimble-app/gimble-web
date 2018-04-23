import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import { ConnectedRouter } from 'react-router-redux';
import Navigation from './navigation/Navigation';
import { selectIsLoggedIn } from './auth/reducers';
import Notifier from './notifications/Notifier';

export const App = ({classes, isLoggedIn, history }) => (
  <Fragment>
    <ConnectedRouter history={history}>
      <Navigation isLoggedIn={isLoggedIn}/>
    </ConnectedRouter>
    <Notifier />
  </Fragment>
)

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
})

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
)(App)
