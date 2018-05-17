import React, {Fragment} from 'react';
import CardCollection from "../common/CardCollection";

const RequestEntry = ({ request }) => <p>{request.to}</p>;

const RequestedList = ({ requested }) => (
  <Fragment>
    <p>Sent friend requests:</p>
    <CardCollection>
      {
        requested.map(request => <RequestEntry key={request.id} request={request} />)
      }
    </CardCollection>
  </Fragment>
);

export default RequestedList;
