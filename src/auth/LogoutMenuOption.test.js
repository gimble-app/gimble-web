import React from 'react';
import { shallow } from 'enzyme';
import { LogoutMenuOption } from './LogoutMenuOption';
import { MenuItem } from 'material-ui/Menu';

it('renders a menu option', () => {
  const wrapper = shallow(<LogoutMenuOption isLoggedIn />);
  expect(wrapper.find(MenuItem)).toExist();
});
