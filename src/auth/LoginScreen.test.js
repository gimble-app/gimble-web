import React from 'react';
import { mount } from 'enzyme';
import Typography from 'material-ui/Typography';
import LoginScreen from './LoginScreen';

it('renders welcome message', () => {
  const wrapper = mount(<LoginScreen />);
  expect(wrapper.find(Typography).text()).toContain("Welcome!");
});
