import React from 'react';
import {ListItem, ListItemText, ListItemSecondaryAction} from "material-ui/List";
import IconButton from "material-ui/IconButton";
import Done from 'material-ui-icons/Done';
import Clear from 'material-ui-icons/Clear';
import {accept, reject} from "./actions";
import {connect} from "react-redux";

const AcceptButton = ({ onClick }) =>
  <IconButton aria-label="Accept" onClick={onClick}>
    <Done />
  </IconButton>;

const RejectButton = ({ onClick }) =>
  <IconButton aria-label="Reject" onClick={onClick}>
    <Clear />
  </IconButton>;

export const RequestEntry = ({request, accept, reject}) =>
  <ListItem>
    <ListItemText>{request.fromName}</ListItemText>
    <ListItemSecondaryAction>
      <AcceptButton onClick={() => accept(request.id)}/>
      <RejectButton onClick={() => reject(request.id)}/>
    </ListItemSecondaryAction>
  </ListItem>;

const mapDispatchToProps = {
  accept,
  reject
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(RequestEntry)
