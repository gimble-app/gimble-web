import React from 'react';
import { shallow } from 'enzyme';
import { RequestEntry } from './RequestEntry';

describe('<RequestEntry />', () => {
  const accept = jest.fn();
  const reject = jest.fn();

  it('accepts with the id', () => {
    const wrapper = shallow(<RequestEntry accept={accept} reject={reject} request={{ from: '1234' }}/>);

    wrapper.find('AcceptButton').prop('onClick')();

    expect(accept).toBeCalledWith('1234');
  });

  it('rejects with the id', () => {
    const wrapper = shallow(<RequestEntry accept={accept} reject={reject} request={{ from: '1234' }}/>);

    wrapper.find('RejectButton').prop('onClick')();

    expect(reject).toBeCalledWith('1234');
  });
});
