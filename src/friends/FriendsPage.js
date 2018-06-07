import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {requestsFromUserCollection, requestsToUserCollection,} from './firestoreQueries';
import {selectFriendRefs, selectFriendRequests, selectRequestedFriends} from './selectors';
import AddFriendForm from './AddFriendForm';
import RequestedList from './RequestedList';
import RequestsList from './RequestsList';
import FriendProfileList from './FriendProfileList';
import styled from "styled-components";
import {withTheme} from "@material-ui/core";
import SectionHeaderText from "../common/typography/SectionHeaderText";

const Div = withTheme()(styled.div`
  padding:${({theme}) => theme.spacing.unit * 2}px;
  width: 100%;
  background-color:${({theme}) => theme.palette.background.paper}
`);

export const FriendsPage = ({ requested, requests, friends }) => (
  <Div>
    <SectionHeaderText>Friends</SectionHeaderText>
    {!!friends && <FriendProfileList friends={friends} /> }
    <AddFriendForm />
    {requested && requested.length > 0 && <RequestedList requested={requested} /> }
    {requests && requests.length > 0 && <RequestsList requests={requests} /> }
  </Div>
);

export default compose(
  firebaseConnect(),
  firestoreConnect((state) => [
    requestsToUserCollection(state),
    requestsFromUserCollection(state),
  ]),
  connect(state => ({
    requests: selectFriendRequests(state),
    requested: selectRequestedFriends(state),
    friends: selectFriendRefs(state)
  }))
)(FriendsPage);
