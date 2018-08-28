import React from "react";
import { shallow } from "enzyme";
import { EventHeader } from "./EventHeader";
import DetailedHeader from "../../../common/DetailedHeader";

describe('<EventHeader />', () => {
  it('renders the header', () => {
    const rendered = shallow(<EventHeader event={{}} />);

    expect(rendered.find(DetailedHeader)).toExist();
  });
});


