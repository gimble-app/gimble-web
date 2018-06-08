import React from 'react';
import { shallow } from 'enzyme';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ProfileIcon from '@material-ui/icons/AccountCircle';
import HomeAppBar from './HomeAppBar';

describe('<HomeAppBar />', () => {
  it('renders navigation links in the correct order', () => {
    const wrapper = shallow(<HomeAppBar events={[]} theme={{}} />);
    const tabs = wrapper.find('SpacedTabs');

    expect(tabs.childAt(0).prop('icon')).toEqual(<EventNoteIcon />);
    expect(tabs.childAt(1).prop('icon')).toEqual(<ProfileIcon />);
  });
});

