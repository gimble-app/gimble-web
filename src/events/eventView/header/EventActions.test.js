import React from 'react';
import { EventActions } from './EventActions';
import DeleteMenuItem from "./DeleteMenuItem";
import { shallow } from 'enzyme';
import ChangeParticipantsMenuItem from "./ChangeParticipantsMenuItem";

describe('<EventActions>', () => {
  it('renders an add friend menu item', () => {
    const rendered = shallow(<EventActions id='some-id' />);

    expect(rendered.find(ChangeParticipantsMenuItem)).toExist();
    expect(rendered.find(ChangeParticipantsMenuItem).prop('id')).toBe('some-id');
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
