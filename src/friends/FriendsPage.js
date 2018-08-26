import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {requestsToUserCollection,} from './firestoreQueries';
import {selectFriendRefs, selectFriendRequests} from './selectors';
import RequestsList from './RequestsList';
import FriendProfileList from './FriendProfileList';
import styled from "styled-components";
import SectionHeaderText from "../common/typography/SectionHeaderText";
import AddButton from "../profile/AddButton";
import FlexContainer from "../common/layout/FlexContainer";
import {fromPalette} from "../theme/theme";

const Div = styled.div`
  padding:${({theme}) => theme.spacing.unit * 2}px;
  width: 100%;
  background-color:${({theme}) => fromPalette(theme, 'primaryContrast')}
`;

export const FriendsPage = ({ requests, friends }) => (
  <Div>
    <FlexContainer
      justifyContent="space-between"
      alignItems="center"
    >
      <SectionHeaderText>Friends</SectionHeaderText>
      <AddButton />
    </FlexContainer>

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
