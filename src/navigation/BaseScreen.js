import React, { Component, Fragment } from 'react';
import withRouter from "react-router-dom/withRouter";
import AppBar from '@material-ui/core/AppBar';
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupIcon from '@material-ui/icons/Group';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Fade from "@material-ui/core/Fade";
import BaseNavigationItem from "./BaseNavigationItem";

const ARBITRARTY_OFFSET = 50;
const checkNearTop = () => (window.pageYOffset < ARBITRARTY_OFFSET);

export class BaseScreen extends Component {

  state = {
    isNearTop: checkNearTop()
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ isNearTop: checkNearTop() });
  };

  render() {
    const { location, children } = this.props;
    const { isNearTop } = this.state;
    return (
      <Fragment>
        <Fade in={isNearTop}>
          <AppBar position="sticky">
            <BottomNavigation>
              <BaseNavigationItem isActive={location.pathname.includes("friends")} to="friends" icon={<GroupIcon />} />
              <BaseNavigationItem isActive={location.pathname.includes("events")} to="events" icon={<EventNoteIcon />} />
              <BaseNavigationItem isActive={location.pathname.includes("profile")} to="profile" icon={<ProfileIcon />} />
            </BottomNavigation>
          </AppBar>
        </Fade>
        { children }
      </Fragment>
    );
  }
}

export default withRouter(BaseScreen);
