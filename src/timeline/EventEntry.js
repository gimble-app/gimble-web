import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Menu from '@material-ui/core/Menu';
import Divider from "@material-ui/core/Divider";
import DeleteMenuItem from "./DeleteMenuItem";
import {InternalLink} from "../common/InternalLinks";
import TimelineEventSummary from "./TimelineEventSummary";
import TitleText from "../common/typography/TitleText";
import ParticipantsSummary
from "../events/eventView/header/ParticipantsSummary";
import TimelineEventDescription from "./TimelineEventDescription";
import LongPressAware from "../common/LongPressAware";
import {deleteEvent} from "../events/eventEdit/actions";
import ChangeParticipantsMenuItem from "./ChangeParticipantsMenuItem";

export class EventEntry extends Component {
  state = {
    anchorEl: null,
  };

  triggerMenu = targetEl => {
    this.setState({anchorEl: targetEl});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const { anchorEl } = this.state;
    const { deleteEvent, event } = this.props;
    return (<Fragment>
      <Menu
        id={'actions-menu'}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={this.handleClose}
      >
        <ChangeParticipantsMenuItem id={event.id} onClick={this.handleClose}/>
        <Divider />
        <DeleteMenuItem onClick={() => {
          deleteEvent(event.id);
          this.handleClose();
        }}/>
      </Menu>
      <LongPressAware onPress={this.triggerMenu}>
        <InternalLink to={`/event/${event.id}`}>
          <TimelineEventSummary image={event.image}>
            <TimelineEventDescription>
              <TitleText>{event.title}</TitleText>
            </TimelineEventDescription>
            <ParticipantsSummary participants={event.participants}/>
          </TimelineEventSummary>
        </InternalLink>
      </LongPressAware>
    </Fragment>)
  }
}

const mapDispatchToProps = {
  deleteEvent,
};

export default connect(() => ({}), mapDispatchToProps)(EventEntry);
