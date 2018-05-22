import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {
  requestsFromUserCollection,
  requestsToUserCollection,
  friendsCollection
} from './firestoreQueries';
import { selectFriendRequests, selectRequestedFriends, selectFriendRefs } from './selectors';
import Page from '../common/Page';
import AddFriendForm from './AddFriendForm';
import RequestedList from './RequestedList';
import RequestsList from './RequestsList';
import FriendList from './FriendList';

export const FriendsPage = ({ requested, requests, friends }) => (
  <Page>
    <AddFriendForm />
    {requested && requested.length > 0 && <RequestedList requested={requested} /> }
    {requests && requests.length > 0 && <RequestsList requests={requests} /> }
    {friends && friends.length > 0 && <FriendList friends={friends} /> }
  </Page>
);

export default compose(
  firebaseConnect(),
  firestoreConnect((state) => [
    requestsToUserCollection(state),
    requestsFromUserCollection(state),
    friendsCollection(state)
  ]),
  connect(state => ({
    requests: selectFriendRequests(state),
    requested: selectRequestedFriends(state),
    friends: selectFriendRefs(state)
  }))
)(FriendsPage);
