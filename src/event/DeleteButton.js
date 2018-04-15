import React from 'react';
import Button from 'material-ui/Button';
import { InternalLink } from '../common/InternalLinks';

const DeleteButton = ({ onClick }) => (
  <InternalLink to="/">
    <Button
      onClick={onClick}
      color="inherit"
      aria-label="delete"
      variant="flat"
    >
      Delete
    </Button>
  </InternalLink>
);

export default DeleteButton;
