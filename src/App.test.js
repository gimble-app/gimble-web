import React, {Fragment} from 'react';
import { mount } from 'enzyme';
import App from './App';
import LoginScreen from './auth/LoginScreen'

jest.mock('react-firebaseui/StyledFirebaseAuth', () => () => <p></p>);

jest.mock('./auth/firebaseProvider', () => ({
  getUiConfig: jest.fn(),
  getFirebaseAuth: jest.fn(),
  setAuthCallback: jest.fn()
}))

it('renders the login screen', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(LoginScreen)).toExist();
});
