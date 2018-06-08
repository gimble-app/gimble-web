import React from "react";
import AddIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from "@material-ui/core/IconButton";
import {InternalLink} from "../common/InternalLinks";

const AddButton = () => (
  <IconButton color="primary" aria-label="add friends">
    <InternalLink to="invites">
      <AddIcon />
    </InternalLink>
  </IconButton>
);

export default AddButton;
