import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import HomeScreen from './home/HomeScreen';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1
  }
};

const App = ({ classes }) =>
    <Router>
      <div className={classes.root}>
        <Route exact path="/" component={HomeScreen} />
      </div>
    </Router>


export default withStyles(styles)(App);
