import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import {InternalLink} from "../common/InternalLinks";

const DeleteMenuItem = ({ onClick }) => (
  <MenuItem onClick={onClick}>
    <InternalLink to="/">
      Delete event
    </InternalLink>
  </MenuItem>
);

export default DeleteMenuItem;
