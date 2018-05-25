import React from 'react';
import { InternalLink } from '../../common/InternalLinks';
import DeleteIcon from 'material-ui-icons/Delete';
import IconButton from "material-ui/IconButton";

const DeleteButton = ({ onClick }) => (
  <InternalLink to="/">
    <IconButton color="inherit" aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  </InternalLink>
);

export default DeleteButton;
