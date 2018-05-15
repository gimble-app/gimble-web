import React from 'react';
import Page from "../common/Page";
import AddFriendForm from "./AddFriendForm";

const FriendsPage = ({ friends = [], onSave={} }) => (
  <Page>
    <AddFriendForm onSave={onSave}/>
  </Page>
)
export default FriendsPage;
