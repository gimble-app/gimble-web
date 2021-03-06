import React, {Component} from 'react';
import {withFirestore} from 'react-redux-firebase';
import styled from "styled-components";
import {PROFILES_COLLECTION} from "../../../profile/firestoreQueries";
import FlexContainer from "../../../common/layout/FlexContainer";
import AvatarOrPlaceholder from "../../../common/avatars/AvatarOrPlaceholder";

const RightDirectionFlexContainer = styled(FlexContainer)`
  direction: rtl;
`;

class Participants extends Component {

  state = {
    participants: {},
    participantsList: []
  };

  componentDidMount() {
    this._loadParticipants(this.props.firebase, this.props.participants);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    if (prevProps.participants) {
      return (prevProps.participants !== prevState.participants) ? prevProps.participants : null;
    }
    return null;
  }

  _lookupProfileData = async (ref) => {
    try {
      const snapshot = await ref.get();
      return snapshot.data();
    }
    catch (e) {
      console.log('errored while trying to load profile info for participant', e);
      return {};
    }
  };

  _loadParticipants = async (firebase, participants = []) => {
    const result = await Promise.all(
      Object.keys(participants)
      .map(id => firebase.firestore().doc(`${PROFILES_COLLECTION}/${id}`))
      .map(this._lookupProfileData)
    );
    const profiles = result.map(data => ({
      uid: data.uid,
      photoURL: data.photoURL,
      displayName: data.displayName,
    }));
    this.setState({ participantsList: profiles });
  };

  render () {
    const { participantsList } = this.state;
    return (
        <RightDirectionFlexContainer>
          { participantsList.map(
            (participant, i) => (<AvatarOrPlaceholder position={i} key={participant.displayName} photoUrl={participant.photoURL} />)
          ) }
       </RightDirectionFlexContainer>
    )
  }
}


export default withFirestore(Participants);
