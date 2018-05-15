import React from 'react';
import Page from "../common/Page";
import BackgroundMessage from './BackgroundMessage';
import AddFriendForm from "./AddFriendForm";

const FriendsPage = ({ friends = [], onSave={} }) => (
  <Page>
    {friends.length > 0
      ? <p>You have friends</p>
      : <BackgroundMessage/>
    }
    <AddFriendForm onSave={onSave}/>
  </Page>
)
export default FriendsPage;
