import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import BackIcon from '@material-ui/icons/ArrowBack';

const BackButton = ({ onClick }) => (
  <IconButton color="inherit" aria-label="cancel" onClick={onClick}>
    <BackIcon />
  </IconButton>
);

export default BackButton;
