import React from 'react';
import RequestsList from './RequestsList';
import { shallow } from 'enzyme';

describe('<RequestsList />', () => {

  it('renders an entry for each request', () => {
    const rendered = shallow(<RequestsList requested={[{ id: 1 }, { id: 2 }]}/>);
    expect(rendered.find('RequestEntry').length).toBe(2);
  });
});
