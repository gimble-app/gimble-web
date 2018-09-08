import React from "react";
import {connect} from "react-redux";
import styled from 'styled-components';
import AvatarOrPlaceholder from "../../../common/avatars/AvatarOrPlaceholder";
import LabelText from "../../../common/typography/LabelText";
import BodyText from "../../../common/typography/BodyText";
import {selectProfileFromUid} from "../../../profile/selectors";
import {selectCurrentUserId} from "../../../auth/selectors";
import AddDateHandler from "./AddDateHandler";
import PreferredDateEntry from "./PreferredDateEntry";

const DatesEntryContainer = styled.div`
  flex: 1;
  margin: 8px;
  display: inline-block;
  text-align: center;
`;

const LabelledAvatar = ({displayName, photoUrl}) =>
  <div style={{display: 'flex', marginLeft: '4px', alignItems: 'center', maxHeight: '40px'}}>
    <AvatarOrPlaceholder key={displayName} photoUrl={photoUrl} />
    <span style={{paddingLeft: '4px'}}><LabelText colour="primary">{displayName}</LabelText></span>
  </div>;


const EventParticipantDatesEntry = ({profile = {}, participant, isMe, event}) => (
    <DatesEntryContainer>
      <LabelledAvatar displayName={profile.displayName} photoUrl={profile.photoURL} />
      <div style={{marginTop: '12px'}}>
        {
          participant.preferredDates ?
            <ul style={{ listStyle: "none", padding: "0px", margin: "0px" }}>
              { participant.preferredDates.map(date => (
                <li style={{
                  margin: "4px",
                  display: "inline-flex",
                  alignItems: "center",
                  height: '30px'
                }} key={`${date.from} - ${date.to}`}>
                  <PreferredDateEntry isMe={isMe} event={event} from={date.from} to={date.to} />
                </li>
              ))}
            </ul>
            : <BodyText>no dates added yet...</BodyText>
        }
        { isMe &&  <AddDateHandler event={event} /> }
      </div>
    </DatesEntryContainer>
  );

const mapStateToProps = (state, { participant }) => ({
  profile: selectProfileFromUid(state, participant.uid),
  isMe: selectCurrentUserId(state) === participant.uid
});

export default connect(mapStateToProps)(EventParticipantDatesEntry);
