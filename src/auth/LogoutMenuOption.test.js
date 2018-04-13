import React from 'react';
import { shallow } from 'enzyme';
import { LogoutMenuOption } from './LogoutMenuOption';
import { MenuItem } from 'material-ui/Menu';

import { logOut } from './firebaseProvider';
const logoutMock = jest.fn();
logoutMock.mockReturnValue(Promise.resolve());

jest.doMock('./firebaseProvider', () => ({
  logOut: logoutMock
}))

it('renders a menu option', () => {
  const wrapper = shallow(<LogoutMenuOption isLoggedIn />);
  expect(wrapper.find(MenuItem)).toExist();
});
