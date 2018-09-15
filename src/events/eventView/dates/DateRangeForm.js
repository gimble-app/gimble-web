import React from "react";
import {Field, reduxForm} from 'redux-form'
import SubmitButton from "../../../common/forms/SubmitButton";
import DayPickerField from "./DayPickerField";
import moment from "moment";
import PropTypes from 'prop-types';
import styled from "styled-components";
import SimpleIconButton from "../../../common/buttons/SimpleIconButton";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Form = styled.form`
  margin: 0px;
  height: 100vh;
`;

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
      onDatesSelected,
      onDatesCanceled
    } = this.props;

    const { focusedInput } = this.state;

    return (
      <Form onSubmit={handleSubmit(onDatesSelected)}>
        <Field
          name="range"
          component={DayPickerField}
          focusedInput={focusedInput}
          onFocusChange={this.onFocusChange}
        />
        <SimpleIconButton
          onClick={onDatesCanceled}
        ><DeleteForeverIcon /></SimpleIconButton>
          <SubmitButton disabled={ submitting || pristine || invalid }/>
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
  onDatesSelected: PropTypes.func.isRequired,
  onDatesCanceled: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired
};

export default DateRangeForm;
