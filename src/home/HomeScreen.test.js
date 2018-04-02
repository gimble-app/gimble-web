import React from 'react';
import { mount } from 'enzyme';
import HomeScreen from './HomeScreen';
import Typography from 'material-ui/Typography';

it('renders welcome message', () => {
  const wrapper = mount(<HomeScreen />);
  expect(wrapper.find(Typography)).toExist();
});
