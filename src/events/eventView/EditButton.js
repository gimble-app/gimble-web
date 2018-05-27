import React from 'react';
import EditIcon from 'material-ui-icons/Edit';
import {InternalLink} from "../../common/InternalLinks";
import Fab from "../../common/Fab";

const EditButton = ({ id }) => (
  <Fab aria-label="edit">
    <InternalLink to={`/event/${id}/edit`}>
      <EditIcon />
    </InternalLink>
  </Fab>
);

export default EditButton;
