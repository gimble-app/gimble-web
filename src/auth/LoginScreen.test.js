import React from 'react';
import { shallow } from 'enzyme';
import Typography from 'material-ui/Typography';
import { LoginScreen } from './LoginScreen';
import Page from '../common/Page';

it('renders the component', () => {
  const wrapper = shallow(<LoginScreen />);
  expect(wrapper.find(Page)).toExist();
});
