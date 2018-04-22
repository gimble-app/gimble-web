import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'material-ui/Typography';
import { LoginScreen } from './LoginScreen';
import { getFirebaseAuth } from './firebaseProvider';

jest.doMock('./firebaseProvider.js', () => {
  getFirebaseAuth: null
});

xit('renders the component', () => {
  const wrapper = shallow(<LoginScreen />);
  expect(wrapper.find(Page)).toExist();
});
