import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { ConnectedRouter } from 'react-router-redux';

it('renders the router screen', () => {
  const wrapper = shallow(<App history={{}}/>);
  expect(wrapper.find(ConnectedRouter)).toExist();
});
