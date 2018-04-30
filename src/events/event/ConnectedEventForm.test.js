import React from 'react';
import { ConnectedEventForm } from './ConnectedEventForm';
import EventForm from './EventForm';
import { shallow } from 'enzyme';

describe('<ConnectedEventForm>', () => {
  it('renders the component', () => {
    const rendered = shallow(<ConnectedEventForm />);
    expect(rendered).toExist();
  });

  it('renders an event form when there is initial data', () => {
    const rendered = shallow(<ConnectedEventForm
      storedData={{
        title: 'some-title'
      }}/>);
    expect(rendered.find(EventForm)).toExist();
  });

  it('renders an event form when when the event is new', () => {
    const rendered = shallow(<ConnectedEventForm isNew />);
    expect(rendered.find(EventForm)).toExist();
  });

  it('does not render the form when there is no data and the event is not new', () => {
    const rendered = shallow(<ConnectedEventForm />);
    expect(rendered.find(EventForm)).not.toExist();
  });
});
