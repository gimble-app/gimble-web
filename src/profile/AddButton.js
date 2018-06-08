import React from "react";
import AddIcon from '@material-ui/icons/Add';
import {InternalLink} from "../common/InternalLinks";

const AddButton = () => (
  <InternalLink to="invites">
    <AddIcon />
  </InternalLink>
);

export default AddButton;
