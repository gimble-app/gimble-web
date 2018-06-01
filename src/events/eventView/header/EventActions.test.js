import React from 'react';
import { EventActions } from './EventActions';
import DeleteMenuItem from "./DeleteMenuItem";
import { shallow } from 'enzyme';
import AddFriendMenuItem from "./AddFriendMenuItem";

describe('<EventActions>', () => {
  it('renders an add friend menu item', () => {
    const rendered = shallow(<EventActions />);

    expect(rendered.find(AddFriendMenuItem)).toExist();
  });

  it('renders a delete menu item', () => {
    const rendered = shallow(<EventActions />);

    expect(rendered.find(DeleteMenuItem)).toExist();
  });

  it('passes the event id be deleted', () => {
    const deleteEvent = jest.fn();
    const wrapper = shallow(<EventActions id='some-id' deleteEvent={deleteEvent}/>);

    wrapper.find(DeleteMenuItem).prop('onClick')();

    expect(deleteEvent).toBeCalledWith('some-id');
  });
});
