import React, {Fragment} from 'react';
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import ListItemSecondaryAction from "material-ui/List/ListItemSecondaryAction";
import List from "material-ui/List";
import IconButton from "material-ui/IconButton";
import DeleteIcon from 'material-ui-icons/Delete';

const RequestEntry = ({ request }) => <List dense>
    <ListItem>
      <ListItemText>{request.to}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
</List>;

const RequestedList = ({ requested }) => (
  <Fragment>
    <p>Sent friend requests:</p>
    <List dense>
      {
        requested.map(request => <RequestEntry key={request.id} request={request} />)
      }
    </List>
  </Fragment>
);

export default RequestedList;


