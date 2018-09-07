import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from "react";
import {connect} from "react-redux";
import {DayPickerRangeController} from 'react-dates';
import {Field, reduxForm} from 'redux-form'
import Form from "../../common/forms/Form";
import {addPreferredDate} from "./actions";
import * as moment from "moment";
import SubmitButton from "../new/SubmitButton";

class AddPreferredDateForm extends React.Component {

  state = {
    focusedInput: 'endDate'
  };

  onFocusChange = (focusedInput) => {
    this.setState({
      focusedInput: !focusedInput ? 'startDate' : focusedInput,
    });
  };

  render() {

    const {
      submitting,
      pristine,
      invalid,
      handleSubmit,
      addPreferredDate
    } = this.props;

    const { focusedInput } = this.state;

    return (
      <Form onSubmit={handleSubmit(addPreferredDate)}>
        <Field
          name="range"
          label="What are we planning?"
          component={({input}) => (
            <DayPickerRangeController
            startDate={ input.value.from && moment(input.value.from) }
              endDate={ input.value.to && moment(input.value.to) }
              onDatesChange={({ startDate, endDate }) => input.onChange({
                from: startDate, to: endDate
              })}
              focusedInput={focusedInput}
              onFocusChange={this.onFocusChange}
            />
          )}
        />
        <SubmitButton disabled={ submitting || pristine || invalid }/>
      </Form>
    )
  }
}

const mapDispatchToProps = { addPreferredDate };

const NewEventReduxForm = reduxForm({
  form: 'addPreferredDate',
  initialValues: {
    range: {
      from: moment.now(),
      until: moment.now()
    }
  }
})(AddPreferredDateForm);

export default connect(() => ({}), mapDispatchToProps)(NewEventReduxForm);
