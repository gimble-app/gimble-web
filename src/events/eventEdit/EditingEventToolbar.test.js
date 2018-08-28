import React from 'react';
import EditingEventToolbar from './EditingEventToolbar';
import SaveButton from './SaveButton';
import { shallow } from 'enzyme';
import CancelButton from "../../common/buttons/HistoryAwareCancelButton";

describe('<EditingEventToolbar>', () => {
  it('renders the component', () => {
    const rendered = shallow(<EditingEventToolbar />);
    expect(rendered).toExist();
  });

  it('renders a save button', () => {
    const rendered = shallow(<EditingEventToolbar />);
    expect(rendered.find(SaveButton)).toExist();
  });

  it('renders a cancel button', () => {
    const rendered = shallow(<EditingEventToolbar />);
    expect(rendered.find(CancelButton)).toExist();
  });
});
