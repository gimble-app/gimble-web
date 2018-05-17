import React, {Fragment} from 'react';
import CardCollection from "../common/CardCollection";

const RequestEntry = ({ request }) => <p>{request.from}</p>;

const RequestsList = ({ requests }) => (
  <Fragment>
    <p>Received friend requests:</p>
    <CardCollection>
      {
        requests.map(request => <RequestEntry key={request.id} request={request} />)
      }
    </CardCollection>
  </Fragment>
);

export default RequestsList;
