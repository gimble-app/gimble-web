import React from 'react';
import CheckIcon from 'material-ui-icons/Check';
import IconButton from 'material-ui/IconButton';
import { InternalLink } from '../../common/InternalLinks';

const SaveButton = ({ onClick }) => (
  <InternalLink to="/">
    <IconButton onClick={onClick} color="inherit" aria-label="save">
      <CheckIcon />
    </IconButton>
  </InternalLink>
);

export default SaveButton;
