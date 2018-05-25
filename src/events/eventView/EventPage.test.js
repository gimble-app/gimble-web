import React from "react";
import {shallow} from "enzyme";
import EditButton from "./EditButton";
import {EventPage} from "./EventPage";

it('renders an edit button', () => {
  const rendered = shallow(<EventPage event={{}} />);

  expect(rendered.find(EditButton)).toExist();
});
