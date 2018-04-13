import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui-icons/Close';
import { Link } from "react-router-dom";

const CancelButton = () =>
  <Link to="/">
    <IconButton color="inherit" aria-label="cancel">
      <NavigationClose />
    </IconButton>
  </Link>

export default CancelButton;
