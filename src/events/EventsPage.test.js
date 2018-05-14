import React from 'react';
import { shallow } from 'enzyme';
import { EventsPage } from './EventsPage';
import EventsOverview from './EventsOverview';
import BackgroundMessage from './BackgroundMessage';

it('includes a background message when there are no events', () => {
  const wrapper = shallow(<EventsPage events={[]} />);
  expect(wrapper.find(BackgroundMessage)).toExist();
  expect(wrapper.find(EventsOverview)).not.toExist();
});

it('does not include a background message when there are events', () => {
  const wrapper = shallow(<EventsPage events={
    [{ id: '1', title: 'one event' }]
  } />);

  expect(wrapper.find(EventsOverview)).toExist();
  expect(wrapper.find(BackgroundMessage)).not.toExist();
});
