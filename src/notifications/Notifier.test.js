import React from 'react';
import { Notifier } from './Notifier';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('<Notifier>', () => {

  it('renders nothing when there are no notifications', () => {
    const rendered = shallow(<Notifier />);
    expect(rendered).toExist();
  });

  it('renders a notification when one exists', () => {
    const rendered = shallow(<Notifier notification={{message: 'hello'}}/>);
    expect(rendered.find(Notification)).toExist();
  });
});
