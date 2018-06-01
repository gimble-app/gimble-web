import React from 'react';
import {withFirestore} from 'react-redux-firebase';
import {connect} from "react-redux";
import {compose} from "redux";
import List from "@material-ui/core/List";
import {selectFriends} from "./selectors";
import FriendEntry from "./FriendEntry";
import {withTheme} from "@material-ui/core";
import styled from "styled-components";

const ProfileList = withTheme()(styled(List)`
   background-color:${({theme}) => theme.palette.background.paper}
`);

export const FriendProfileList = ({ onSelect, friends }) =>
  <ProfileList dense>
    { friends && friends.map(
      friend => <FriendEntry onSelect={onSelect} key={friend.uid} friend={friend} />
    ) }
  </ProfileList>;

export default withFirestore(compose(
  connect(state => ({
    friends: selectFriends(state)
  })),
)(FriendProfileList));
