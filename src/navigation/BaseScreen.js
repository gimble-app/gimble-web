import React, { Component, Fragment } from 'react';
import withRouter from "react-router-dom/withRouter";
import AppBar from '@material-ui/core/AppBar';
import EventNoteIcon from '@material-ui/icons/EventNote';
import GroupIcon from '@material-ui/icons/Group';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import Tabs from "@material-ui/core/Tabs";
import Fade from "@material-ui/core/Fade";
import BaseNavigationItem from "./BaseNavigationItem";
import {withTheme} from "@material-ui/core/styles";
import {EVENTS_KEY, FRIENDS_KEY, PROFILE_KEY} from "./AuthenticatedRoutes";
import styled from "styled-components";

const ARBITRARTY_OFFSET = 50;
const checkNearTop = () => (window.pageYOffset < ARBITRARTY_OFFSET);

const SpacedTabs = styled(Tabs)`
  .MuiTabs-flexContainer-37 {
    display: flex;
    justify-content: space-evenly;  
  }
`;

export class BaseScreen extends Component {

  state = {
    isNearTop: checkNearTop()
  };

  navItems = [
    { key: FRIENDS_KEY, icon: GroupIcon },
    { key: EVENTS_KEY, icon: EventNoteIcon },
    { key: PROFILE_KEY, icon: ProfileIcon }
  ];

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  getSelected(pathname) {
    const path = pathname.slice(1);
    const navIndex = this.navItems.findIndex(x => x.key === path);
    return navIndex === -1 ? false : navIndex;
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
            <SpacedTabs
              fullWidth
              value={this.getSelected(location.pathname)}
            >
              { this.navItems.map(({key, icon: Icon}) => <BaseNavigationItem key={key} to={key} icon={<Icon />} />) }
            </SpacedTabs>
          </AppBar>
        </Fade>
        { children }
      </Fragment>
    );
  }
}

export default withTheme()(withRouter(BaseScreen));
