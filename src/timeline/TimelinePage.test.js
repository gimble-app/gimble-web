import React from 'react';
import { shallow } from 'enzyme';
import { TimelinePage } from './TimelinePage';
import TripTimeline from './TripTimeline';
import BackgroundMessage from './BackgroundMessage';

it('includes a background message when there are no events', () => {
  const wrapper = shallow(<TimelinePage events={[]} />);
  expect(wrapper.find(BackgroundMessage)).toExist();
  expect(wrapper.find(TripTimeline)).not.toExist();
});

it('does not include a background message when there are events', () => {
  const wrapper = shallow(<TimelinePage events={
    [{ id: '1', title: 'one event' }]
  } />);

  expect(wrapper.find(TripTimeline)).toExist();
  expect(wrapper.find(BackgroundMessage)).not.toExist();
});
