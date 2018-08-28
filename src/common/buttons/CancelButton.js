import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import NavigationClose from '@material-ui/icons/Close';

const CancelButton = ({ onClick }) => (
  <IconButton color="inherit" aria-label="cancel" onClick={onClick}>
    <NavigationClose />
  </IconButton>
);

export default CancelButton;
