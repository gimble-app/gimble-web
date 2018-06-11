import React from 'react';
import {shallow} from 'enzyme';
import {InviteScreen} from './InviteScreen';
import RequestedList from "./RequestedList";

describe('<InviteScreen />', () => {

  it('does not render a RequestedList if there are no friend requests sent', () => {
    const wrapper = shallow(<InviteScreen/>);
    expect(wrapper.find(RequestedList)).not.toExist();
  });

  it('renders a RequestedList when there are friend requests', () => {
    const wrapper = shallow(<InviteScreen requested={[{id: 'some-id'}]}/>);
    expect(wrapper.find(RequestedList)).toExist();
  });
});
