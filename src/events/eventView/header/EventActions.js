import React, {Component, Fragment} from 'react';
import Menu from '@material-ui/core/Menu';
import Divider from "@material-ui/core/Divider";
import DeleteMenuItem from "./DeleteMenuItem";
import {deleteEvent} from "../../eventEdit/actions";
import {connect} from "react-redux";
import ChangeParticipantsMenuItem from "./ChangeParticipantsMenuItem";
import ActionsButton from "../../../common/buttons/ActionsButton";
import EditMenuItem from "../EditMenuItem";

export class EventActions extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const { anchorEl } = this.state;
    const { deleteEvent, id } = this.props;
    return (<Fragment>
      <ActionsButton
        aria-owns={anchorEl ? 'actions-menu' : null}
        aria-haspopup="true"
        aria-label="options"
        onClick={this.handleClick}
      />,
      <Menu
        id={'actions-menu'}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
        <ChangeParticipantsMenuItem id={id} onClick={this.handleClose}/>
        <Divider />
        <EditMenuItem/>
        <Divider />
        <DeleteMenuItem onClick={() => {
          deleteEvent(id);
          this.handleClose();
        }}/>
      </Menu>
    </Fragment>)
  }
}

const mapDispatchToProps = {
  deleteEvent,
};

export default connect(() => ({}), mapDispatchToProps)(EventActions);
