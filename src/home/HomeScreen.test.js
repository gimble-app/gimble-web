import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'material-ui/Typography';
import { HomeScreen } from './HomeScreen';
import ProfileMenu from './ProfileMenu';
import EventCard from './EventCard';
import BackgroundMessage from './BackgroundMessage';

it('includes a background message when there are no events', () => {
  const wrapper = shallow(<HomeScreen events={[]} />);
  expect(wrapper.find(BackgroundMessage)).toExist();
});

it('does not include a background message when there are events', () => {
  const wrapper = shallow(<HomeScreen events={
    [{ id: '1', title: 'one event' }]
  } />);
  expect(wrapper.find(BackgroundMessage)).not.toExist();
});


it('renders a profile menu option', () => {
  const wrapper = shallow(<HomeScreen events={[]} />);
  expect(wrapper.find(ProfileMenu)).toExist();
});

it('renders an event when one exists', () => {
  const wrapper = shallow(<HomeScreen events={
    [{ id: '1', title: 'one event' }]
  } />);
  expect(wrapper.find(EventCard).length).toBe(1);
});

it('renders all events when more than one exists', () => {
  const wrapper = shallow(<HomeScreen events={
    [{ id: '1', title: 'one event' }, { id: '2', title: 'two event' }]
  } />);
  expect(wrapper.find(EventCard).length).toBe(2);
});
