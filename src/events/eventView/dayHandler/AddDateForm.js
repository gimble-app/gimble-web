import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form'
import Form from "../../../common/forms/Form";
import {addPreferredDateRange} from "../actions";
import SubmitButton from "../../../common/forms/SubmitButton";
import DayPickerField from "./DayPickerField";
import moment from "moment/moment";

class AddDateForm extends React.Component {

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

const mapDispatchToProps = (dispatch, { event, participant }) => ({
  addPreferredDate: ({range}) => dispatch(addPreferredDateRange(range, event, participant))
});

const NewEventReduxForm = reduxForm({
  form: 'addPreferredDateRange',
  initialValues: {
    range: {
      from: moment.now(),
      to: moment.now()
    }
  }
})(AddDateForm);

export default connect(() => ({}), mapDispatchToProps)(NewEventReduxForm);
