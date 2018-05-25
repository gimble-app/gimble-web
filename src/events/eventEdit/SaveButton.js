import React from 'react';
import Button from 'material-ui/Button';
import { InternalLink } from '../../common/InternalLinks';

const SaveButton = ({ onClick }) => (
  <InternalLink to="/">
    <Button onClick={onClick} color="inherit" aria-label="save" variant="flat">
      Save
    </Button>
  </InternalLink>
);

export default SaveButton;
