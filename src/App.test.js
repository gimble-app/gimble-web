import React, {Fragment} from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-firebaseui/StyledFirebaseAuth', () => () => <p></p>);

jest.mock('./auth/firebaseProvider', () => ({
  getUiConfig: jest.fn(),
  getFirebaseAuth: jest.fn(),
  setAuthCallback: jest.fn()
}))

it('renders the router screen', () => {
  const wrapper = shallow(<App classes={{ root: "" }}/>);
  expect(wrapper.find(Router)).toExist();
});
