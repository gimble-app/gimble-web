import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';
import {withRouter} from "react-router-dom";

const BackButton = ({ history }) => (
  <IconButton color="inherit" aria-label="cancel" onClick={ () => history.goBack() }>
    <BackIcon />
  </IconButton>
);

export default withRouter(BackButton);
