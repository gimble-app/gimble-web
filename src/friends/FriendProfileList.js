import React from 'react';
import {withFirestore} from 'react-redux-firebase';
import {connect} from "react-redux";
import {compose} from "redux";
import List from "@material-ui/core/List";
import {selectFriends} from "./selectors";
import FriendEntry from "./FriendEntry";

export const FriendProfileList = ({ onSelect, friends }) =>
  <List dense>
    { friends && friends.map(
      friend => <FriendEntry onSelect={onSelect} key={friend.uid} friend={friend} />
    ) }
  </List>;

export default withFirestore(compose(
  connect(state => ({
    friends: selectFriends(state)
  })),
)(FriendProfileList));
