import React from 'react';
import { shallow } from 'enzyme';
import EventCard from './EventCard';
import EventsOverview from './EventsOverview';

describe('events overview', () => {
  it('renders a single event', () => {
    const wrapper = shallow(<EventsOverview events={
      [{ id: '1', title: 'one event' }]
    } />);
    expect(wrapper.find(EventCard).length).toBe(1);
  });

  it('renders multiple events', () => {
    const wrapper = shallow(<EventsOverview events={
      [{ id: '1', title: 'one event' }, { id: '2', title: 'two event' }]
    } />);
    expect(wrapper.find(EventCard).length).toBe(2);
  });
});
