import React, {Fragment} from 'react';
import { mount } from 'enzyme';
import App from './App';
import HomeScreen from './home/HomeScreen'

it('renders the home screen', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(HomeScreen)).toExist();
});
