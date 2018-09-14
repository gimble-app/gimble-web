import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form'
import Form from "../../../common/forms/Form";
import {setEventDates} from "./actions";
import SubmitButton from "../../../common/forms/SubmitButton";
import DayPickerField from "./DayPickerField";
import moment from "moment";

class FinaliseDatesForm extends React.Component {

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
      setEventDates
    } = this.props;

    const { focusedInput } = this.state;

    return (
      <Form onSubmit={handleSubmit(setEventDates)}>
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

const mapDispatchToProps = (dispatch, { event }) => ({
  setEventDates: ({range}) => dispatch(setEventDates(range, event))
});

const NewEventReduxForm = reduxForm({
  form: 'finaliseDates',
  initialValues: {
    range: {
      from: moment.now(),
      to: moment.now()
    }
  }
})(FinaliseDatesForm);

export default connect(() => ({}), mapDispatchToProps)(NewEventReduxForm);
