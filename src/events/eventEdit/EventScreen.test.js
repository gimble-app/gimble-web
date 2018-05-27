import React from 'react';
import { shallow } from 'enzyme';
import { EventScreen } from './EventScreen';
import ConnectedEventForm from './ConnectedEventForm';
import EditingEventToolbar from './EditingEventToolbar';

describe('<EventScreen />', () => {
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

  it('updates with a new field value when the eventform changes', () => {
    const wrapper = shallow(<EventScreen match={{params:{}}}/>);

    wrapper.setState({ fieldValues: { firstField: 'some-value' } });

    wrapper.find(ConnectedEventForm).prop('onChange')({ firstField: 'some-updated-value' });
    expect(wrapper.state().fieldValues).toEqual({ firstField: 'some-updated-value' });
  });

  it('passes the event fields to be saved', () => {
    const saveEvent = jest.fn();
    const wrapper = shallow(<EventScreen match={{ params: { id: 'some-id' }}} saveEvent={saveEvent}/>);

    wrapper.setState({ fieldValues: { firstField: 'some-value' } });

    wrapper.find(EditingEventToolbar).prop('onSave')();
    expect(saveEvent).toBeCalledWith({ firstField: 'some-value' }, 'some-id');
  });

});
