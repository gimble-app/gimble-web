import 'react-dates/initialize';
import './dayPickerStyles';
import React from "react";
import {DayPickerRangeController} from 'react-dates';
import moment from "moment/moment";

const DayPickerField = ({ input, meta, ...rest }) => (
  <DayPickerRangeController
    orientation="verticalScrollable"
    numberOfMonths={2}
    startDate={input.value.from && moment(input.value.from) }
    endDate={ input.value.to && moment(input.value.to) }
    onDatesChange={({ startDate, endDate }) => input.onChange({
      from: startDate, to: endDate
    })}
    {...rest}
  />
);

export default DayPickerField;
