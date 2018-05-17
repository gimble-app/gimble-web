import React from 'react';
import CardCollection from "../common/CardCollection";

const RequestEntry = ({ request }) => <p>{request.to}</p>;

const RequestedList = ({ requested }) => (
  <CardCollection>
    {
      requested.map(request => <RequestEntry key={request.id} request={request} />)
    }
  </CardCollection>
);

export default RequestedList;
