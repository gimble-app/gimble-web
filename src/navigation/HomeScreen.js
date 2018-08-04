import React, {Component, Fragment} from 'react';
import withRouter from "react-router-dom/withRouter";
import {withTheme} from "@material-ui/core/styles";
import SwipeableViews from 'react-swipeable-views';
import TimelinePage from "../timeline/TimelinePage";
import ProfilePage from "../profile/ProfilePage";
import HomeAppBar from "./HomeAppBar";
import ProfileActionsDialog from "../profile/ProfileActionsDialog";

export class HomeScreen extends Component {

  state = {
    value: 0
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
          <TimelinePage />
          <ProfilePage />
        </SwipeableViews>
        <ProfileActionsDialog />
      </Fragment>
    );
  }
}

export default withTheme()(withRouter(HomeScreen));
