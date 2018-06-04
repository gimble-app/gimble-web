import React, {Component, Fragment} from 'react';
import withRouter from "react-router-dom/withRouter";
import {withTheme} from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';
import FriendsPage from "../friends/FriendsPage";
import EventsPage from "../events/EventsPage";
import ProfilePage from "../profile/ProfilePage";
import HomeAppBar from "./HomeAppBar";

export class HomeScreen extends Component {

  state = {
    value: 1
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSwipeChange = index => {
    this.setState({ value: index });
  };

  render() {
    const { theme } = this.props;
    const { value } = this.state;
    return (
      <Fragment>
        <HomeAppBar value={value} onSelect={this.handleChange} />
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
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
