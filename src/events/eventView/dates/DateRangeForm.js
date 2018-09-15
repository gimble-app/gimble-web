import React from "react";
import {Field, reduxForm} from 'redux-form'
import Form from "../../../common/forms/Form";
import SubmitButton from "../../../common/forms/SubmitButton";
import DayPickerField from "./DayPickerField";
import moment from "moment";
import PropTypes from 'prop-types';

class UnconnectedDateForm extends React.Component {

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
      submitFn
    } = this.props;

    const { focusedInput } = this.state;

    return (
      <Form onSubmit={handleSubmit(submitFn)}>
        <Field
          name="range"
          component={DayPickerField}
          focusedInput={focusedInput}
          onFocusChange={this.onFocusChange}
        />
        <div style={{padding: '16px'}}>
          <SubmitButton disabled={ submitting || pristine || invalid }/>
        </div>
      </Form>
    )
  }
}

const DateRangeForm = reduxForm({
  form: 'dateRangeSelection',
  initialValues: {
    range: {
      from: moment.now(),
      to: moment.now()
    }
  }
})(UnconnectedDateForm);


DateRangeForm.propTypes = {
  submitFn: PropTypes.func.isRequired ,
  onSubmitSuccess: PropTypes.func.isRequired
};

export default DateRangeForm;
