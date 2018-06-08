import React from 'react';
import { shallow } from 'enzyme';
import { FriendsPage } from './FriendsPage';
import FriendProfileList from './FriendProfileList';
import AddButton from "../profile/AddButton";
import RequestsList from "./RequestsList";

describe('<FriendsPage />', () => {
  it('renders the AddButton', () => {
    const wrapper = shallow(<FriendsPage />);
    expect(wrapper.find(AddButton)).toExist();
  });

  it('does not render a RequestsList if there are no friend requests sent', () => {
    const wrapper = shallow(<FriendsPage />);
    expect(wrapper.find(RequestsList)).not.toExist();
  });

  it('renders a RequestsList when there are friend requests', () => {
    const wrapper = shallow(<FriendsPage requests={[{ id: 'some-id' }]}/>);
    expect(wrapper.find(RequestsList)).toExist();
  });


  it('renders a FriendProfileList when there are friends', () => {
    const wrapper = shallow(<FriendsPage friends={[{ id: 'some-id' }]}/>);
    expect(wrapper.find(FriendProfileList)).toExist();
  });
});
