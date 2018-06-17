import React from 'react';
import { shallow } from 'enzyme';
import { ProfilePage } from './ProfilePage';
import BigAvatar from '../common/BigAvatar';

describe('<ProfilePage />', () => {
  it('renders an avatar for the profile', () => {
    const wrapper = shallow(<ProfilePage profile={{ photoURL: 'some-profile-url' }}/>);
    expect(wrapper.find(BigAvatar)).toExist();
    expect(wrapper.find(BigAvatar).prop('src')).toBe('some-profile-url');
  });
});
