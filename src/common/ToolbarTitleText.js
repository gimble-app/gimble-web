import React from 'react';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  flex: {
    flex: 1
  }
});

export const ToolbarTitleText = ({ classes, children }) =>
<Typography
  variant="title"
  color="inherit"
  className={classes.flex}
>
  {children}
</Typography>

export default withStyles(styles)(ToolbarTitleText);
