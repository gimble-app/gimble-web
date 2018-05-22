import React from 'react';
import { shallow } from 'enzyme';
import { FriendsPage } from './FriendsPage';
import AddFriendForm from './AddFriendForm';
import RequestedList from './RequestedList';
import FriendList from './FriendList';

describe('<FriendsPage />', () => {
  it('renders the AddFriendForm', () => {
    const wrapper = shallow(<FriendsPage />);
    expect(wrapper.find(AddFriendForm)).toExist();
  });

  it('does not render a RequestedList if there are no friend requests sent', () => {
    const wrapper = shallow(<FriendsPage />);
    expect(wrapper.find(RequestedList)).not.toExist();
  });

  it('renders a RequestedList when there are friend requests', () => {
    const wrapper = shallow(<FriendsPage requested={[{ id: 'some-id' }]}/>);
    expect(wrapper.find(RequestedList)).toExist();
  });

  it('renders a FriendList when there are friend requests', () => {
    const wrapper = shallow(<FriendsPage friends={[{ id: 'some-id' }]}/>);
    expect(wrapper.find(FriendList)).toExist();
  });
});
