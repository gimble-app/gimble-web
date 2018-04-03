import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'material-ui/Typography';
import { HomeScreen } from './HomeScreen';
import LogoutButton from '../auth/LogoutButton';

it('renders welcome message', () => {
  const wrapper = shallow(<HomeScreen classes={{flex: ""}} />);
  expect(wrapper.find(Typography)).toExist();
});

it('renders a logout button', () => {
  const wrapper = shallow(<HomeScreen classes={{flex: ""}} />);
  expect(wrapper.find(LogoutButton)).toExist();
});
