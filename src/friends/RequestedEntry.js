import React from 'react';
import {connect} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {rescind} from "./actions";

export const RequestedEntry = ({ request, rescind }) =>
  <ListItem>
    <ListItemText>{request.to}</ListItemText>
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => rescind(request.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>

const mapDispatchToProps = {
  rescind
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(RequestedEntry)
