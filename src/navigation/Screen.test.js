import React from 'react';
import { shallow } from 'enzyme';
import Screen from './Screen';

describe('<Screen />', () => {
  it('renders the provided children', () => {
    const wrapper = shallow(<Screen events={[]}><button /></Screen>);
    expect(wrapper.find('button')).toExist();
  });

  it('renders navigation links', () => {
    const wrapper = shallow(<Screen events={[]} />);
    expect(wrapper.find('[to="friends"]')).toExist();
    expect(wrapper.find('[to="events"]')).toExist();
    expect(wrapper.find('[to="profile"]')).toExist();
  });
});

