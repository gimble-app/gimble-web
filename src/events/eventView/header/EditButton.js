import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {InternalLink} from "../../../common/InternalLinks";
import EditIcon from '@material-ui/icons/Edit';

const EditButton = ({ id }) => (
  <IconButton color="inherit" aria-label="edit">
    <InternalLink to={`/event/${id}/edit`}>
      <EditIcon />
    </InternalLink>
  </IconButton>
);

export default EditButton;
