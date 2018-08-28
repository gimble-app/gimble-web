import React from 'react';
import {withRouter} from "react-router-dom";
import CancelButton from "./CancelButton";

const HistoryAwareCancelButton = ({ history, colour }) => (
  <CancelButton onClick={history.goBack} colour={colour} />
);

export default withRouter(HistoryAwareCancelButton);
