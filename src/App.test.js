import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import BrowserRouter from "react-router-dom/BrowserRouter";

it('renders the router screen', () => {
  const wrapper = shallow(<App history={{}}/>);
  expect(wrapper.find(BrowserRouter)).toExist();
});
