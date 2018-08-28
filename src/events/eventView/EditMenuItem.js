import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import {InternalLink} from "../../common/InternalLinks";

const EditMenuItem = ({ id }) => (
  <MenuItem>
    <InternalLink to={`/event/${id}/edit`}>
      Edit
    </InternalLink>
  </MenuItem>
);

export default EditMenuItem;
