import React from 'react';
import { shallow, mount } from 'enzyme';
import TextField from 'material-ui/TextField';
import { EventScreen } from './EventScreen';
import ConnectedEventForm from './ConnectedEventForm';
import EditingEventToolbar from './EditingEventToolbar';
import DeleteButton from './DeleteButton';

describe('<EventScreen>', () => {
  it('renders a ConnectedEventForm', () => {
    const wrapper = shallow(<EventScreen match={{params:{}}}/>);
    const initialFieldValues = {};
    expect(wrapper.find(ConnectedEventForm)).toExist();
    expect(wrapper.find(ConnectedEventForm).prop('fieldValues')).toEqual(initialFieldValues);
  });

  it('adds an initial field value when the eventform changes', () => {
    const wrapper = shallow(<EventScreen match={{params:{}}}/>);

    wrapper.find(ConnectedEventForm).prop('onChange')({ newField: 'some-value' });

    expect(wrapper.state().fieldValues).toEqual({ newField: 'some-value' });
  });

  it('adds a new field value when the eventform changes', () => {
    const wrapper = shallow(<EventScreen match={{params:{}}}/>);
    wrapper.setState({ fieldValues: { firstField: 'some-value' } });

    wrapper.find(ConnectedEventForm).prop('onChange')({ secondField: 'some-value' });

    expect(wrapper.state().fieldValues).toEqual({
      firstField: 'some-value',
      secondField: 'some-value'
    });
  });

  it('updates an existing field value when the eventform changes', () => {
    const wrapper = shallow(<EventScreen match={{params:{}}}/>);
    wrapper.setState({ fieldValues: { firstField: 'some-value' } });

    wrapper.find(ConnectedEventForm).prop('onChange')({ firstField: 'some-updated-value' });

    expect(wrapper.state().fieldValues).toEqual({ firstField: 'some-updated-value' });
  });

  it('sends the field data to the save prop to be saved when called', () => {
    const saveEvent = jest.fn();
    const wrapper = shallow(<EventScreen match={{ params: { id: 'some-id' }}} saveEvent={saveEvent}/>);
    wrapper.setState({ fieldValues: { firstField: 'some-value' } });

    wrapper.find(EditingEventToolbar).prop('onSave')();

    expect(saveEvent).toBeCalledWith({ firstField: 'some-value' }, 'some-id' );
  });

  it('sends the id to the delete prop when deleted', () => {
    const deleteEvent = jest.fn();
    const wrapper = shallow(<EventScreen  match={{params:{id: 'some-id'}}} deleteEvent={deleteEvent}/>);
    wrapper.setState({ fieldValues: { title: 'data' } });

    wrapper.find(EditingEventToolbar).prop('onDelete')();

    expect(deleteEvent).toBeCalledWith('some-id');
  });
});
