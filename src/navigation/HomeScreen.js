import React, { Component, Fragment } from 'react';
import withRouter from "react-router-dom/withRouter";
import AppBar from '@material-ui/core/AppBar';
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupIcon from '@material-ui/icons/Group';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import Tabs from "@material-ui/core/Tabs";
import Fade from "@material-ui/core/Fade";
import {withTheme} from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import SwipeableViews from 'react-swipeable-views';
import FriendsPage from "../friends/FriendsPage";
import EventsPage from "../events/EventsPage";
import ProfilePage from "../profile/ProfilePage";

const ARBITRARTY_OFFSET = 50;
const checkNearTop = () => (window.pageYOffset < ARBITRARTY_OFFSET);

const SpacedTabs = styled(Tabs)`
  .MuiTabs-flexContainer-37 {
    display: flex;
    justify-content: space-evenly;  
  }
`;

const EVENTS_KEY = "events";
const FRIENDS_KEY = "friends";
const PROFILE_KEY = "profile";

export class HomeScreen extends Component {

  state = {
    isNearTop: checkNearTop(),
    value: 1
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSwipeChange = index => {
    this.setState({ value: index });
  };

  handleScroll = () => {
    this.setState({ isNearTop: checkNearTop() });
  };

  render() {
    const { theme } = this.props;
    const { isNearTop, value } = this.state;
    return (
      <Fragment>
        <Fade in={isNearTop}>
          <AppBar position="sticky">
            <SpacedTabs fullWidth value={value} onChange={this.handleChange}>
              <Tab label={FRIENDS_KEY} icon={<GroupIcon />} />
              <Tab label={EVENTS_KEY} icon={<EventNoteIcon />} />
              <Tab label={PROFILE_KEY} icon={<ProfileIcon />} />
            </SpacedTabs>
          </AppBar>
        </Fade>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleSwipeChange}
        >
          <FriendsPage />
          <EventsPage />
          <ProfilePage />
        </SwipeableViews>
      </Fragment>
    );
  }
}

export default withTheme()(withRouter(HomeScreen));
