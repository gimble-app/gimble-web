import React from 'react';
import { shallow } from 'enzyme';
import { ProfileScreen } from './ProfileScreen';
import BorderedBigAvatar from './BorderedBigAvatar';

describe('<ProfileScreen />', () => {
  it('renders an avatar for the profile', () => {
    const wrapper = shallow(<ProfileScreen profile={{ photoURL: 'some-profile-url' }}/>);
    expect(wrapper.find(BorderedBigAvatar)).toExist();
    expect(wrapper.find(BorderedBigAvatar).prop('src')).toBe('some-profile-url');
  });
});
