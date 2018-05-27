import React from 'react';
import { shallow } from 'enzyme';
import Button from "@material-ui/core/Button";
import { LogoutMenuOption } from './LogoutMenuOption';
import {Redirect} from 'react-router-dom';

describe('<LogoutMenuOption />', () => {
  it('renders a button when the user is logged in', () => {
    const wrapper = shallow(<LogoutMenuOption isLoggedIn />);
    expect(wrapper.find(Button)).toExist();
    expect(wrapper.find(Redirect)).not.toExist();
  });

  it('renders a redirect when the user is not logged in', () => {
    const wrapper = shallow(<LogoutMenuOption />);
    expect(wrapper.find(Button)).not.toExist();
    expect(wrapper.find(Redirect)).toExist();
  });
});
