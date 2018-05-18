import React, {Fragment} from 'react';
import List from "material-ui/List";
import RequestEntry from "./RequestEntry";

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
