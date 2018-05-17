import React from 'react';
import RequestedList from './RequestedList';
import { shallow } from 'enzyme';

describe('<RequestedList />', () => {

  it('renders an entry for each request', () => {
    const rendered = shallow(<RequestedList requested={[{ id: 1 }, { id: 2 }]}/>);
    expect(rendered.find('RequestEntry').length).toBe(2);
  });
});
