import React from 'react';
import { shallow } from 'enzyme';
import LogoutButton from './LogoutButton';
import LogoutScreen from './LogoutScreen';

it('renders a log out button', () => {
  const wrapper = shallow(<LogoutScreen />);
  expect(wrapper.find(LogoutButton)).toExist();
});
