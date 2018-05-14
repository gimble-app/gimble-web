import React from 'react';
import { shallow } from 'enzyme';
import FriendsPage from './FriendsPage';
import BackgroundMessage from './BackgroundMessage';

it('includes a background message when there are no friends', () => {
  const wrapper = shallow(<FriendsPage friends={[]} />);
  expect(wrapper.find(BackgroundMessage)).toExist();
  expect(wrapper.find('p')).not.toExist();
});

it('does not include a background message when there are friends', () => {
  const wrapper = shallow(<FriendsPage friends={
    [{ id: '1', title: 'one event' }]
  } />);

  expect(wrapper.find('p')).toExist();
  expect(wrapper.find(BackgroundMessage)).not.toExist();
});
