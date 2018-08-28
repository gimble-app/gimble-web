import React from 'react';
import {withRouter} from "react-router-dom";
import BackButton from "./BackButton";

const HistoryAwareBackButton = ({ history }) => (
  <BackButton onClick={history.goBack} />
);

export default withRouter(HistoryAwareBackButton);
