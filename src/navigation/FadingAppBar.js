import React, { Component } from 'react';
import withRouter from "react-router-dom/withRouter";
import AppBar from '@material-ui/core/AppBar';
import Fade from "@material-ui/core/Fade";
import {withTheme} from "@material-ui/core/styles";

const ARBITRARTY_OFFSET = 50;
const checkNearTop = () => (window.pageYOffset < ARBITRARTY_OFFSET);

export class FadingAppBar extends Component {

  state = {
    isNearTop: checkNearTop(),
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ isNearTop: checkNearTop() });
  };

  render() {
    const { children } = this.props;
    const { isNearTop } = this.state;
    return (
        <Fade in={isNearTop}>
          <AppBar position="sticky">
            { children }
          </AppBar>
        </Fade>
    );
  }
}

export default withTheme()(withRouter(FadingAppBar));
