import React from 'react';
import { EventPageToolbar } from './EventPageToolbar';
import DeleteButton from "./DeleteButton";
import { shallow } from 'enzyme';

describe('<EventPageToolbar>', () => {
  it('renders the component', () => {
    const rendered = shallow(<EventPageToolbar />);

    expect(rendered).toExist();
  });

  it('renders a delete button', () => {
    const rendered = shallow(<EventPageToolbar />);

    expect(rendered.find(DeleteButton)).toExist();
  });

  it('passes the event id be deleted', () => {
    const deleteEvent = jest.fn();
    const wrapper = shallow(<EventPageToolbar id='some-id' deleteEvent={deleteEvent}/>);

    wrapper.find(DeleteButton).prop('onClick')();

    expect(deleteEvent).toBeCalledWith('some-id');
  });

});
