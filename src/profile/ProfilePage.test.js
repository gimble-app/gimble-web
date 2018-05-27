import React from 'react';
import { shallow } from 'enzyme';
import { ProfilePage } from './ProfilePage';
import Avatar from '@material-ui/core/Avatar';

describe('<ProfilePage />', () => {
  it('renders an avatar for the profile', () => {
    const wrapper = shallow(<ProfilePage profile={{ photoURL: 'some-profile-url' }}/>);
    expect(wrapper.find(Avatar)).toExist();
    expect(wrapper.find(Avatar).prop('src')).toBe('some-profile-url');
  });
});
