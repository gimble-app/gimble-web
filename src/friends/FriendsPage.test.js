import React from 'react';
import { shallow } from 'enzyme';
import FriendsPage from './FriendsPage';
import AddFriendForm from "./AddFriendForm";

it('renders an form', () => {
  const wrapper = shallow(<FriendsPage />);
  expect(wrapper.find(AddFriendForm)).toExist();
});
