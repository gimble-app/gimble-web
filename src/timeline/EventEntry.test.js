import React from 'react';
import { EventEntry } from './EventEntry';
import DeleteMenuItem from "./DeleteMenuItem";
import { shallow } from 'enzyme';
import ChangeParticipantsMenuItem from "./ChangeParticipantsMenuItem";

describe('<EventEntry>', () => {
  it('renders an change friends menu item', () => {
    const rendered = shallow(<EventEntry event={{id:'some-id'}}  />);

    expect(rendered.find(ChangeParticipantsMenuItem)).toExist();
    expect(rendered.find(ChangeParticipantsMenuItem).prop('id')).toBe('some-id');
  });

  it('renders a delete menu item', () => {
    const rendered = shallow(<EventEntry event={{id:'some-id'}}  />);

    expect(rendered.find(DeleteMenuItem)).toExist();
  });

  it('passes the event id be deleted', () => {
    const deleteEvent = jest.fn();
    const wrapper = shallow(<EventEntry event={{id:'some-id'}} deleteEvent={deleteEvent}/>);

    wrapper.find(DeleteMenuItem).prop('onClick')();

    expect(deleteEvent).toBeCalledWith('some-id');
  });
});
