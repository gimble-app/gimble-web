import React, {Fragment} from 'react';
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";
import List from "material-ui/List";
import Avatar from 'material-ui/Avatar';

const RequestEntry = ({ request }) => <List dense>
  <ListItem>
    <Avatar>?</Avatar>
    <ListItemText>{request.from}</ListItemText>
  </ListItem>
</List>;


const RequestsList = ({ requests }) => (
  <Fragment>
    <p>Received friend requests:</p>
    <List dense>
      {
        requests.map(request => <RequestEntry key={request.id} request={request} />)
      }
    </List>
  </Fragment>
);

export default RequestsList;
