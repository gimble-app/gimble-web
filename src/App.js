import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const styles = {
  root: {
    flexGrow: 1
  }
};

export const App = ({classes, isLoggedIn}) => (
    <div className={classes.root}>
      <Router>
        <Navigation isLoggedIn={isLoggedIn}/>
      </Router>
    </div>
    )

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps)(withStyles(styles)(App))
