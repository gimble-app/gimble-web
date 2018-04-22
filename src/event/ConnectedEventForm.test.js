import React from 'react';
import { ConnectedEventForm } from './ConnectedEventForm';
import EventForm from './EventForm';
import { shallow } from 'enzyme';

describe('<ConnectedEventForm>', () => {
  it('renders the component', () => {
    const rendered = shallow(<ConnectedEventForm />);
    expect(rendered).toExist();
  });

  it('renders and event form when there is initial data', () => {
    const rendered = shallow(<ConnectedEventForm
      storedData={{
        title: 'some-title'
      }}/>);
    expect(rendered.find(EventForm)).toExist();
  });

  it('does not render the form when there is no data', () => {
    const rendered = shallow(<ConnectedEventForm />);
    expect(rendered.find(EventForm)).not.toExist();
  });
});
