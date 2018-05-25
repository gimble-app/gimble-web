import React from 'react';
import {connect} from "react-redux";
import Toolbar from 'material-ui/Toolbar';
import CancelButton from "./CancelButton";
import DeleteButton from "./DeleteButton";
import {deleteEvent} from "../eventEdit/actions";
import ToolbarTitleText from "../../common/ToolbarTitleText";

export const EventPageToolbar = ({id, deleteEvent}) => (
  <Toolbar>
    <CancelButton />
    <ToolbarTitleText/>
    <DeleteButton onClick={() => deleteEvent(id)} />
  </Toolbar>
);

const mapDispatchToProps = {
  deleteEvent,
};

export default connect(() => ({}), mapDispatchToProps)(EventPageToolbar);

