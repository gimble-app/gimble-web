import React from 'react';
import { mount } from 'enzyme';
import Input from '@material-ui/core/Input';
import { AddFriendForm } from './AddFriendForm';

describe('<AddFriendForm />', () => {

  it('renders an email field', () => {
    const wrapper = mount(<AddFriendForm />);

    expect(wrapper.find(Input)).toExist();
    expect(wrapper.find(Input).prop('label')).toBe('Email');
  });
});
