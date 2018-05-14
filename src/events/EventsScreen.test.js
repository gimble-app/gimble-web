import React from 'react';
import { shallow } from 'enzyme';
import EventsScreen from './EventsScreen';
import ProfileMenu from './ProfileMenu';

it('renders a profile menu option', () => {
  const wrapper = shallow(<EventsScreen events={[]} />);
  expect(wrapper.find(ProfileMenu)).toExist();
});
