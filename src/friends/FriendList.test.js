import React from 'react';
import { FriendList } from './FriendList';
import FriendEntry from './FriendEntry';
import { shallow } from 'enzyme';

describe('<FriendList />', () => {

  it('renders an entry for each friend', () => {
    const rendered = shallow(<FriendList friends={[{ email: 'some@email.com' }, { email: 'some@email.com' }]}/>);
    expect(rendered.find(FriendEntry).length).toBe(2);
  });
});
