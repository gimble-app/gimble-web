import React from 'react';
import EditIcon from 'material-ui-icons/Edit';
import {InternalLink} from "../../common/InternalLinks";
import ContrastTextIconButton from "./ContrastTextIconButton";

const EditButton = ({ id }) => (
  <InternalLink to={`/event/${id}/edit`}>
    <ContrastTextIconButton color="inherit" aria-label="edit">
      <EditIcon />
    </ContrastTextIconButton>
  </InternalLink>
);

export default EditButton;
