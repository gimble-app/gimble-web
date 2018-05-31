import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";

export const FriendEntry = ({ friend = {}, onSelect }) =>
  <ListItem button={!!onSelect} onClick={() => onSelect && onSelect(friend.uid)}>
    <Avatar src={friend && friend.photoURL } />
    <ListItemText>{friend.displayName}</ListItemText>
  </ListItem>;

export default FriendEntry
