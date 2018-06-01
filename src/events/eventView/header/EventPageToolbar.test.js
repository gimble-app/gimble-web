import React from 'react';
import { EventPageToolbar } from './EventPageToolbar';
import EventActions from "./EventActions";
import { shallow } from 'enzyme';

describe('<EventPageToolbar>', () => {
  it('renders the component', () => {
    const rendered = shallow(<EventPageToolbar />);

    expect(rendered).toExist();
  });

  it('passes the event id to the actions menu', () => {
    const wrapper = shallow(<EventPageToolbar id='some-id' />);

    const prop = wrapper.find(EventActions).prop('id');

    expect(prop).toBe('some-id');
  });

});
