import React from 'react';
import EditingEventToolBar from './EditingEventToolBar';
import DeleteButton from './DeleteButton';
import { shallow } from 'enzyme';

describe('<EditingEventToolBar>', () => {
  it('renders the component', () => {
    const rendered = shallow(<EditingEventToolBar />);
    expect(rendered).toExist();
  });

  it('renders a delete button when the event is not new', () => {
    const rendered = shallow(<EditingEventToolBar />);
    expect(rendered.find(DeleteButton)).toExist();
  });

  it('does not render a delete button when the event is new', () => {
    const rendered = shallow(<EditingEventToolBar isNew />);
    expect(rendered.find(DeleteButton)).not.toExist();
  })
});
