import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import {InternalLink} from "../../common/InternalLinks";

const AddFriendButton = ({id}) =>
  <IconButton aria-label="add friend">
    <InternalLink to={`/event/${id}/add-friend`}>
      <AddIcon />
    </InternalLink>
  </IconButton>;

export default AddFriendButton;
