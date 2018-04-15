import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui-icons/Close';
import { InternalLink } from '../common/InternalLinks';

const CancelButton = () => (
  <InternalLink to="/">
    <IconButton color="inherit" aria-label="cancel">
      <NavigationClose />
    </IconButton>
  </InternalLink>
);

export default CancelButton;
