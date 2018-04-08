import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders the router screen', () => {
  const wrapper = shallow(<App classes={{ root: "" }}/>);
  expect(wrapper.find(Router)).toExist();
});
