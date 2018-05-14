import React from 'react';
import { shallow } from 'enzyme';
import Screen from './Screen';
import ProfileMenu from './ProfileMenu';

describe('<Screen />', () => {
  it('renders the provided children', () => {
    const wrapper = shallow(<Screen events={[]}><button /></Screen>);
    expect(wrapper.find('button')).toExist();
  });

  it('renders a profile menu option', () => {
    const wrapper = shallow(<Screen events={[]} />);
    expect(wrapper.find(ProfileMenu)).toExist();
  });
})

