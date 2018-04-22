import React from 'react'
import { Router } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firebaseConnect } from 'react-redux-firebase'
import browserHistory from './navigation/history';
import Navigation from './navigation/Navigation';
import { selectIsLoggedIn } from './auth/reducers';

const styles = {
  root: {
    flexGrow: 1
  }
};

export const App = ({classes, isLoggedIn }) => (
    <div className={classes.root}>
      <Router history={browserHistory}>
        <Navigation isLoggedIn={isLoggedIn}/>
      </Router>
    </div>
    )

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state),
})

export default compose(
  firebaseConnect(),
  connect(mapStateToProps),
  withStyles(styles)
)(App)
