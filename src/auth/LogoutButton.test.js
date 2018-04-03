import React from 'react';
import { shallow } from 'enzyme';
import Button from 'material-ui/Button';
import LogoutButton from './LogoutButton';
import { logOut as mockedLogOut } from './firebaseProvider';

jest.mock('./firebaseProvider', () => ({
  logOut: jest.fn()
}))

it('renders a button', () => {
  const wrapper = shallow(<LogoutButton />);
  expect(wrapper.find(Button)).toExist();
});

it('calls the logout command with the provided callback when clicked', () => {
  const callback = () => {};
  const wrapper = shallow(<LogoutButton onLogout={callback} />);

  wrapper.find(Button).simulate('click');
  expect(mockedLogOut).toHaveBeenCalledWith(callback);
});
