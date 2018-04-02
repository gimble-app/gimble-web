import React from "react";
import { MemoryRouter as Router, Route } from "react-router-dom";
import { mount } from 'enzyme';
import ProtectedRoute from './ProtectedRoute';

it('renders the component when the user is authenticated', () => {
  const wrapper = mount(<Router><div>
    <ProtectedRoute
      exact
      path="/"
      component={props => <h1>BAM</h1>}
      isAuthenticated
    />
    <Route path="/login" render={() => <h1>LOGIN</h1>} />
  </div></Router>);
  expect(wrapper).toContainReact(<h1>BAM</h1>);
  expect(wrapper).not.toContainReact(<h1>LOGIN</h1>);

});

it('redirects to the login component when the user is not authenticated', () => {
  const wrapper = mount(<Router><div>
    <ProtectedRoute
      exact
      path="/"
      component={props => <h1>BAM</h1>}
    />
    <Route path="/login" render={() => <h1>LOGIN</h1>} />
  </div></Router>);
  expect(wrapper).toContainReact(<h1>LOGIN</h1>);
  expect(wrapper).not.toContainReact(<h1>BAM</h1>);
});
