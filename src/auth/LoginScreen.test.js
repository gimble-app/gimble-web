import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'material-ui/Typography';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import LoginScreen from './LoginScreen';

it('renders the component', () => {
  const wrapper = shallow(<LoginScreen />);
  expect(wrapper.find(StyledFirebaseAuth)).toExist();
});
