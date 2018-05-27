import React from 'react';
import { shallow } from 'enzyme';
import IconButton from "@material-ui/core/IconButton";
import { RequestedEntry } from './RequestedEntry';

describe('<RequestedEntry />', () => {

  it('rescinds with the id', () => {
    const rescind = jest.fn();

    const wrapper = shallow(<RequestedEntry rescind={rescind} request={{ id: '1234' }}/>);
    wrapper.find(IconButton).prop('onClick')();

    expect(rescind).toBeCalledWith('1234');
  });
});
