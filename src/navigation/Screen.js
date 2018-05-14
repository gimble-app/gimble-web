import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarTitleText from '../common/ToolbarTitleText';
import ProfileMenu from './ProfileMenu';

export default ({ children }) => (
  <Fragment>
    <AppBar position="sticky">
      <Toolbar>
        <ToolbarTitleText>Gimble</ToolbarTitleText>
        <ProfileMenu/>
      </Toolbar>
    </AppBar>
    { children }
  </Fragment>
);
