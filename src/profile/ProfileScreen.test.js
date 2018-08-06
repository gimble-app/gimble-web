import React from 'react';
import { shallow } from 'enzyme';
import { ProfileScreen } from './ProfileScreen';
import BigAvatar from '../common/BigAvatar';

describe('<ProfileScreen />', () => {
  it('renders an avatar for the profile', () => {
    const wrapper = shallow(<ProfileScreen profile={{ photoURL: 'some-profile-url' }}/>);
    expect(wrapper.find(BigAvatar)).toExist();
    expect(wrapper.find(BigAvatar).prop('src')).toBe('some-profile-url');
  });
});
