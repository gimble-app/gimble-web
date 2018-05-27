import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

export const FriendEntry = ({ friend = {} }) =>
  <ListItem>
    <Avatar src={friend && friend.photoURL } />
    <ListItemText>{friend.displayName}</ListItemText>
  </ListItem>;

export default FriendEntry
