import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'material-ui/Typography';
import { HomeScreen } from './HomeScreen';
import LogoutButton from '../auth/LogoutButton';

it('renders welcome message', () => {
  const wrapper = shallow(<HomeScreen events={[]} />);
  expect(wrapper.find(Typography)).toExist();
});

it('renders a logout button', () => {
  const wrapper = shallow(<HomeScreen events={[]} />);
  expect(wrapper.find(LogoutButton)).toExist();
});

it('renders an event when one exists', () => {
  const wrapper = shallow(<HomeScreen events={["one event"]} />);
  expect(wrapper.find("section").length).toBe(1);
});

it('renders all events when more than one exists', () => {
  const wrapper = shallow(<HomeScreen events={["one event", "two event"]} />);
  expect(wrapper.find("section").length).toBe(2);
});
