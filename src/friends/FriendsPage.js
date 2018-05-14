import React from 'react';
import Page from "../common/Page";
import BackgroundMessage from './BackgroundMessage';

const FriendsPage = ({ friends }) => (
  <Page>
    {friends.length > 0
      ? <p>You have friends</p>
      : <BackgroundMessage/>
    }
  </Page>
)

export default FriendsPage;
