import React from 'react';
import {connect} from "react-redux";
import Toolbar from '@material-ui/core/Toolbar';
import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
import {deleteEvent} from "../eventEdit/actions";
import TitleText from "../../common/typography/TitleText";

export const EventPageToolbar = ({id, deleteEvent}) => (
  <Toolbar>
    <CancelButton />
    <TitleText/>
    <DeleteButton onClick={() => deleteEvent(id)} />
  </Toolbar>
);

const mapDispatchToProps = {
  deleteEvent,
};

export default connect(() => ({}), mapDispatchToProps)(EventPageToolbar);

