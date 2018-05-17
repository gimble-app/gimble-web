import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import { requestedFromUserCollection } from './firestoreQueries';
import { selectRequestedFriendsList } from './selectors';
import Page from '../common/Page';
import AddFriendForm from './AddFriendForm';
import RequestedList from './RequestedList';

export const FriendsPage = ({ requested }) => (
  <Page>
    <AddFriendForm />
    {requested && requested.length > 0 && <RequestedList requested={requested} /> }
  </Page>
)

export default compose(
  firebaseConnect(),
  firestoreConnect(requestedFromUserCollection),
  connect(state => ({
    requested: selectRequestedFriendsList(state)
  }))
)(FriendsPage);
