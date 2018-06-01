import React from 'react';
import NavigationClose from '@material-ui/icons/Close';
import {withRouter} from "react-router-dom";
import ContrastTextIconButton from "./header/ContrastTextIconButton";

const CancelButton = ({ history }) => (
  <ContrastTextIconButton color="inherit" aria-label="cancel" onClick={ () => history.goBack() }>
    <NavigationClose />
  </ContrastTextIconButton>
);

export default withRouter(CancelButton);
