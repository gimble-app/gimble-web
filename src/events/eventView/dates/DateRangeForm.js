import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form'
import moment from "moment";
import PropTypes from 'prop-types';
import styled from "styled-components";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SimpleIconButton from "../../../common/buttons/SimpleIconButton";
import SubmitButton from "../../../common/forms/SubmitButton";
import DayPickerField from "./DayPickerField";

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
      onDatesCanceled
    } = this.props;

    const { focusedInput } = this.state;
    return (
      <Form onSubmit={handleSubmit}>
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

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    range: {
      from: (ownProps.initialDate && ownProps.initialDate.from) || moment.now(),
      to: (ownProps.initialDate && ownProps.initialDate.to) || moment.now()
    },
    uid: ownProps.initialDate && ownProps.initialDate.uid
  }
});

const DateRangeForm = reduxForm({
  form: 'dateRangeSelection'
}, mapStateToProps)(UnconnectedDateForm);

DateRangeForm.propTypes = {
  initialFrom: PropTypes.object,
  initialTo: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onDatesCanceled: PropTypes.func.isRequired,
  onSubmitSuccess: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(DateRangeForm);
