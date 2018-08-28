import React from 'react';
import {withRouter} from "react-router-dom";
import CancelButton from "./CancelButton";

const HistoryAwareCancelButton = ({ history }) => (
  <CancelButton onClick={history.goBack} />
);

export default withRouter(HistoryAwareCancelButton);
