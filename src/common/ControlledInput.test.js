import React from 'react';
import {mount} from "enzyme";
import ControlledInput from "./ControlledInput";

describe('<ControlledInput />', () => {
  it('updates the value whenever it changes', () => {
    const mockFieldChangeEvent = { target: { value: 'new-value' }};
    const wrapper = mount(
      <ControlledInput value="some-value"/>
    );

    wrapper.find('input').prop('onChange')(mockFieldChangeEvent);
    wrapper.update();

    expect(wrapper.find('input').prop('value')).toEqual('new-value');
  });
});
