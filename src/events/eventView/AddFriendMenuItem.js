import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import {InternalLink} from "../../common/InternalLinks";

const AddFriendMenuItem = ({id, onClick}) =>
  <MenuItem onClick={onClick}>
    <InternalLink to={`/event/${id}/add-friend`}>
      Add friends
    </InternalLink>
  </MenuItem>;

export default AddFriendMenuItem;
