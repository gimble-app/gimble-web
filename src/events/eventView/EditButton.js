import React from 'react';
import IconButton from 'material-ui/IconButton';
import {InternalLink} from "../../common/InternalLinks";
import EditIcon from 'material-ui-icons/Edit';

const EditButton = ({ id }) => (
  <InternalLink to={`/event/${id}/edit`}>
    <IconButton color="inherit" aria-label="edit">
      <EditIcon />
    </IconButton>
  </InternalLink>
);

export default EditButton;
