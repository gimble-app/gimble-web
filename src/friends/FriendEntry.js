import React from 'react';
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import Avatar from "material-ui/Avatar";

export const FriendEntry = ({ friend = {} }) =>
  <ListItem>
    <Avatar src={friend && friend.photoURL } />
    <ListItemText>{friend.displayName}</ListItemText>
  </ListItem>;

export default FriendEntry
