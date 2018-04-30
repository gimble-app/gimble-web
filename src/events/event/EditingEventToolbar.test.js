import React from 'react';
import EditingEventToolbar from './EditingEventToolbar';
import DeleteButton from './DeleteButton';
import { shallow } from 'enzyme';

describe('<EditingEventToolbar>', () => {
  it('renders the component', () => {
    const rendered = shallow(<EditingEventToolbar />);
    expect(rendered).toExist();
  });

  it('renders a delete button when the event is not new', () => {
    const rendered = shallow(<EditingEventToolbar />);
    expect(rendered.find(DeleteButton)).toExist();
  });

  it('does not render a delete button when the event is new', () => {
    const rendered = shallow(<EditingEventToolbar isNew />);
    expect(rendered.find(DeleteButton)).not.toExist();
  })
});
