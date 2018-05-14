import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage} from './LoginPage';
import Page from '../common/Page';

it('renders the component', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper.find(Page)).toExist();
});
