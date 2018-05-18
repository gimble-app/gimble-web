import React from 'react';
import {ListItem, ListItemText} from "material-ui/List";

const RequestEntry = ({request}) =>
  <ListItem>
    <ListItemText>{request.fromEmail}</ListItemText>
  </ListItem>

export default RequestEntry;
