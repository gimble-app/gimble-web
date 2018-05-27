import React from 'react';
import EditIcon from 'material-ui-icons/Edit';
import {InternalLink} from "../../common/InternalLinks";
import FixedHeaderButton from "./FixedHeaderButton";

const EditButton = ({ id }) => (
  <FixedHeaderButton aria-label="edit">
    <InternalLink to={`/event/${id}/edit`}>
      <EditIcon />
    </InternalLink>
  </FixedHeaderButton>
);

export default EditButton;
