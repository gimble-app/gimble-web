import React from 'react';
import { mount } from 'enzyme';
import Input from 'material-ui/Input';
import AddFriendForm from './AddFriendForm';

it('renders an email field', () => {
  const wrapper = mount(<AddFriendForm />);

  expect(wrapper.find(Input)).toExist();
  expect(wrapper.find(Input).prop('label')).toBe('Email');
});

