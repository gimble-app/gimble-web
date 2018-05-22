import React from 'react';
import { shallow } from 'enzyme';
import { FriendEntry } from './FriendEntry';
import Avatar from "material-ui/Avatar/index";

describe('<FriendEntry />', () => {

  it('renders an avatar for the profile', () => {
    const wrapper = shallow(<FriendEntry friend={{ photoURL: 'some-profile-url' }}/>);
    expect(wrapper.find(Avatar)).toExist();
    expect(wrapper.find(Avatar).prop('src')).toBe('some-profile-url');
  });
});
