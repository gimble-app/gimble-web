import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './HomeScreen';
import FriendsPage from "../friends/FriendsPage";
import EventsPage from "../events/EventsPage";
import ProfilePage from "../profile/ProfilePage";

describe('<HomeScreen />', () => {
  it('renders the pages to swipe through', () => {
    const wrapper = shallow(<HomeScreen
      events={[]}
      theme={{}}
    ></HomeScreen>);

    expect(wrapper.find(FriendsPage)).toExist();
    expect(wrapper.find(EventsPage)).toExist();
    expect(wrapper.find(ProfilePage)).toExist();
  });

  it('renders navigation links', () => {
    const wrapper = shallow(<HomeScreen
      events={[]}
      theme={{}}
    >></HomeScreen>);

    expect(wrapper.find('[label="friends"]')).toExist();
    expect(wrapper.find('[label="events"]')).toExist();
    expect(wrapper.find('[label="profile"]')).toExist();
  });
});

