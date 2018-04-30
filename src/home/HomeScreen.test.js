import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './HomeScreen';
import ProfileMenu from './ProfileMenu';
import EventsOverview from './EventsOverview';
import BackgroundMessage from './BackgroundMessage';

it('includes a background message when there are no events', () => {
  const wrapper = shallow(<HomeScreen events={[]} />);
  expect(wrapper.find(BackgroundMessage)).toExist();
  expect(wrapper.find(EventsOverview)).not.toExist();
});

it('does not include a background message when there are events', () => {
  const wrapper = shallow(<HomeScreen events={
    [{ id: '1', title: 'one event' }]
  } />);

  expect(wrapper.find(EventsOverview)).toExist();
  expect(wrapper.find(BackgroundMessage)).not.toExist();
});


it('renders a profile menu option', () => {
  const wrapper = shallow(<HomeScreen events={[]} />);
  expect(wrapper.find(ProfileMenu)).toExist();
});
