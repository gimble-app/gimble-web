import React from 'react';
import { shallow } from 'enzyme';
import { BaseScreen } from './BaseScreen';

describe('<BaseScreen />', () => {
  it('renders the provided children', () => {
    const wrapper = shallow(<BaseScreen
      events={[]}
      location={{pathname: 'some-pathname'}}
    ><button /></BaseScreen>);
    expect(wrapper.find('button')).toExist();
  });

  it('renders navigation links', () => {
    const wrapper = shallow(<BaseScreen
      events={[]}
      location={{pathname: 'some-pathname'}}
    ><button /></BaseScreen>);

    expect(wrapper.find('[to="friends"]')).toExist();
    expect(wrapper.find('[to="events"]')).toExist();
    expect(wrapper.find('[to="profile"]')).toExist();
  });
});

