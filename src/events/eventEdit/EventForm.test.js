import React from 'react';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import { EventForm } from './EventForm';

it('renders a title text field', () => {
  const wrapper = shallow(<EventForm fieldValues={{ title: 'some-value' }} classes={{}} />);

  expect(wrapper.find(TextField)).toExist();
  expect(wrapper.find(TextField).prop('defaultValue')).toBe('some-value');
  expect(wrapper.find(TextField).prop('label')).toBe('Title');
});

it('passes the new field key and value to onChange when the title changes', () => {
  const onChange = jest.fn();
  const mockFieldChangeEvent = { target: { value: 'new-value' }};
  const wrapper = shallow(
    <EventForm onChange={onChange} fieldValues={{ title: 'some-value' }} classes={{}} />
  );

  wrapper.find(TextField).prop('onChange')(mockFieldChangeEvent);

  expect(onChange).toHaveBeenCalledWith({ 'title': 'new-value' });

});
