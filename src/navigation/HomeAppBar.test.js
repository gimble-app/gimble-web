import React from 'react';
import { shallow } from 'enzyme';
import HomeAppBar from './HomeAppBar';

describe('<HomeAppBar />', () => {
  it('renders navigation links in the correct order', () => {
    const wrapper = shallow(<HomeAppBar events={[]} theme={{}} />);
    const tabs = wrapper.find('SpacedTabs');

    expect(tabs.childAt(0).prop('label')).toEqual("events");
    expect(tabs.childAt(1).prop('label')).toEqual("profile");
    expect(tabs.childAt(2).prop('label')).toEqual("friends");
  });
});

