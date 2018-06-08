import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {requestsToUserCollection,} from './firestoreQueries';
import {selectFriendRefs, selectFriendRequests} from './selectors';
import RequestsList from './RequestsList';
import FriendProfileList from './FriendProfileList';
import styled from "styled-components";
import {withTheme} from "@material-ui/core";
import SectionHeaderText from "../common/typography/SectionHeaderText";
import AddButton from "../profile/AddButton";
import FlexContainer from "../common/FlexContainer";

const Div = withTheme()(styled.div`
  padding:${({theme}) => theme.spacing.unit * 2}px;
  width: 100%;
  background-color:${({theme}) => theme.palette.background.paper}
`);

export const FriendsPage = ({ requests, friends }) => (
  <Div>
    <FlexContainer><SectionHeaderText>Friends</SectionHeaderText><AddButton /></FlexContainer>

    {!!friends && <FriendProfileList friends={friends} /> }

    {requests && requests.length > 0 && <RequestsList requests={requests} /> }
  </Div>
);

export default compose(
  firebaseConnect(),
  firestoreConnect((state) => [
    requestsToUserCollection(state),
  ]),
  connect(state => ({
    requests: selectFriendRequests(state),
    friends: selectFriendRefs(state)
  }))
)(FriendsPage);
