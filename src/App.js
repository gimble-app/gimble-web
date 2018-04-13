import React from 'react'
import { Router } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import browserHistory from './navigation/history';
import Navigation from './navigation/Navigation';

const styles = {
  root: {
    flexGrow: 1
  }
};

export const App = ({classes, isLoggedIn}) => (
    <div className={classes.root}>
      <Router history={browserHistory}>
        <Navigation isLoggedIn={isLoggedIn}/>
      </Router>
    </div>
    )

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(withStyles(styles)(App))
