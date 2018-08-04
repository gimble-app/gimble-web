import React from 'react';
import { shallow } from 'enzyme';
import { HomeScreen } from './HomeScreen';
import SwipeableViews from "react-swipeable-views";
import ProfilePage from "../profile/ProfilePage";
import TimelinePage from "../timeline/TimelinePage";

describe('<HomeScreen />', () => {
  it('renders the pages to swipe through in the correct order', () => {
    const wrapper = shallow(<HomeScreen events={[]} theme={{}} />);

    const views = wrapper.find(SwipeableViews);

    expect(views.childAt(0).type()).toEqual(TimelinePage);
    expect(views.childAt(1).type()).toEqual(ProfilePage);
  });
});

