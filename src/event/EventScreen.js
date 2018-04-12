import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import ToolbarTitleText from '../common/ToolbarTitleText';

export const EventScreen = () =>
<Fragment>
  <AppBar position="static">
    <Toolbar>
      <CancelButton />
      <ToolbarTitleText>Title</ToolbarTitleText>
      <SaveButton />
    </Toolbar>
  </AppBar>
  <Typography
    variant="body1"
    color="inherit"
    align="center"
  >
    This is where an item would be created
  </Typography>
</Fragment>

export default EventScreen;
