import React from 'react';
import {connect} from "react-redux";
import Toolbar from 'material-ui/Toolbar';
import CancelButton from "../../common/CancelButton";
import EditButton from "./EditButton";
import {deleteEvent} from "../eventEdit/actions";
import DeleteButton from "./DeleteButton";

export const EventPageToolbar = ({title, id, deleteEvent}) => (
  <Toolbar>
    <CancelButton />
    <span>{title}</span>
    <EditButton id={id}/>
    <DeleteButton onClick={() => deleteEvent(id)} />
  </Toolbar>
);

const mapDispatchToProps = {
  deleteEvent,
};

export default connect(() => ({}), mapDispatchToProps)(EventPageToolbar);

