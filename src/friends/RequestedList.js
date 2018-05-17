import React, {Fragment} from 'react';
import List from "material-ui/List";
import RequestedEntry from './RequestedEntry';

const RequestedList = ({ requested }) => (
  <Fragment>
    <p>Sent friend requests:</p>
    <List dense>
      {
        requested.map(request => <RequestedEntry key={request.id} request={request} />)
      }
    </List>
  </Fragment>
);

export default RequestedList;


