import React from 'react';
import { shallow, mount } from 'enzyme';
import TextField from 'material-ui/TextField';
import { EventScreen } from './EventScreen';
import EventForm from './EventForm';
import SaveButton from './SaveButton';
import DeleteButton from './DeleteButton';

it('renders an event form', () => {
  const wrapper = shallow(<EventScreen />);
  const initialFieldValues = {};
  expect(wrapper.find(EventForm)).toExist();
  expect(wrapper.find(EventForm).prop('fieldValues')).toEqual(initialFieldValues);
});

it('renders a delete button if editing an existing event', () => {
  const wrapper = shallow(<EventScreen initialState={{ id: '100' }} />);

  expect(wrapper.find(DeleteButton)).toExist();
});

it('does not render a delete button for a new event', () => {
  const wrapper = shallow(<EventScreen initialState={{}} />);

  expect(wrapper.find(DeleteButton)).not.toExist();
});

it('adds an initial field value when the eventform changes', () => {
  const wrapper = shallow(<EventScreen />);

  wrapper.find(EventForm).prop('onChange')({ newField: 'some-value' });

  expect(wrapper.state().fieldValues).toEqual({ newField: 'some-value' });
});

it('adds a new field value when the eventform changes', () => {
  const wrapper = shallow(<EventScreen />);
  wrapper.setState({ fieldValues: { firstField: 'some-value' } });

  wrapper.find(EventForm).prop('onChange')({ secondField: 'some-value' });

  expect(wrapper.state().fieldValues).toEqual({
    firstField: 'some-value',
    secondField: 'some-value'
  });
});

it('updates an existing field value when the eventform changes', () => {
  const wrapper = shallow(<EventScreen />);
  wrapper.setState({ fieldValues: { firstField: 'some-value' } });

  wrapper.find(EventForm).prop('onChange')({ firstField: 'some-updated-value' });

  expect(wrapper.state().fieldValues).toEqual({ firstField: 'some-updated-value' });
});

it('sends the field data to the save prop when saved', () => {
  const onSave = jest.fn();
  const wrapper = shallow(<EventScreen onSave={onSave}/>);
  wrapper.setState({ fieldValues: { firstField: 'some-value' } });

  wrapper.find(SaveButton).prop('onClick')();

  expect(onSave).toBeCalledWith({ firstField: 'some-value' });
});

it('sends the id to the delete prop when deleted', () => {
  const onDelete = jest.fn();
  const wrapper = shallow(<EventScreen onDelete={onDelete}/>);
  wrapper.setState({ fieldValues: { id: 'some-id' } });

  wrapper.find(DeleteButton).prop('onClick')();

  expect(onDelete).toBeCalledWith('some-id');
});
