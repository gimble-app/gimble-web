import React, {Fragment} from 'react';
import List from "material-ui/List";
import FriendEntry from './FriendEntry';
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {profileQuery} from "./firestoreQueries";
import {selectFriendProfiles} from "./selectors";
import {compose} from "redux";
import {connect} from "react-redux";

export const FriendList = ({ friends = [] }) => (
  <Fragment>
    <p>Friends:</p>
    <List dense>
      {
        friends.map(friend => <FriendEntry friend={friend} key={friend.email} />)
      }
    </List>
  </Fragment>
);

export default compose(
  firebaseConnect(),
  firestoreConnect((state) => {
    return state.friends.map(({id}) => profileQuery(id))
  }),
  connect(state => ({
    friends: selectFriendProfiles(state)
  }))
)(FriendList);
