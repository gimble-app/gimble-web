import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui-icons/Close';
import {withRouter} from "react-router-dom";

const CancelButton = ({ history }) => (
  <IconButton color="inherit" aria-label="cancel" onClick={ () => history.goBack() }>
    <NavigationClose />
  </IconButton>
);

export default withRouter(CancelButton);
