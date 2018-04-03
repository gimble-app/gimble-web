import React from 'react';
import { mount } from 'enzyme';
import Typography from 'material-ui/Typography';
import HomeScreen from './HomeScreen';
import LogoutScreen from '../auth/LogoutScreen';

it('renders welcome message', () => {
  const wrapper = mount(<HomeScreen />);
  expect(wrapper.find(Typography)).toExist();
});

it('renders a logout screen', () => {
  const wrapper = mount(<HomeScreen />);
  expect(wrapper.find(LogoutScreen)).toExist();
});
