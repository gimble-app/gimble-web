import React from 'react';
import { mount } from 'enzyme';
import Typography from 'material-ui/Typography';
import HomeScreen from './HomeScreen';

it('renders welcome message', () => {
  const wrapper = mount(<HomeScreen />);
  expect(wrapper.find(Typography)).toExist();
});
