import React, {Component, Fragment} from 'react';
import Menu from '@material-ui/core/Menu';
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteMenuItem from "./DeleteMenuItem";
import {deleteEvent} from "../../eventEdit/actions";
import {connect} from "react-redux";
import AddFriendMenuItem from "./AddFriendMenuItem";
import ContrastTextIconButton from "./ContrastTextIconButton";

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
      <ContrastTextIconButton
        aria-label="More"
        aria-owns={anchorEl ? 'actions-menu' : null}
        aria-haspopup="true"
        onClick={this.handleClick}
      >
        <MoreVertIcon/>
      </ContrastTextIconButton>,
      <Menu
        id={'actions-menu'}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
        <AddFriendMenuItem onClick={this.handleClose}/>
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
