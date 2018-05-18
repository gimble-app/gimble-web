import React from 'react';
import RequestsList from './RequestsList';
import RequestEntry from './RequestEntry';
import { shallow } from 'enzyme';

describe('<RequestsList />', () => {

  it('renders an entry for each request', () => {
    const rendered = shallow(<RequestsList requests={[{ id: 1 }, { id: 2 }]}/>);
    expect(rendered.find(RequestEntry).length).toBe(2);
  });
});
