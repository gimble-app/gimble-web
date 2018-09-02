import React from "react";
import Form from "../../common/forms/Form";
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import FormGroup from "../../common/forms/FormGroup";
import Label from "../../common/forms/Label";
import FlexContainer from "../../common/layout/FlexContainer";
import bridgeReduxFormField from "../../common/forms/bridgeReduxFormField";
import ImageCheckboxField from "../../common/forms/ImageCheckboxField";
import TextInputField from "../../common/forms/TextInputField";
import {saveEvent} from "./actions";
import {selectProfiles} from "../../profile/selectors";
import SubmitButton from "./SubmitButton";
import {selectCurrentUserId} from "../../auth/selectors";

const requiredValidation = value => (value || typeof value === 'number' ? undefined : 'Required');

const NewEventForm = ({
  participants =[],
  me,
  submitting,
  handleSubmit,
  dirty,
  pristine,
  invalid,
  valid,
  saveEvent
}) => (
  <Form onSubmit={handleSubmit(saveEvent)}>
    <div style={{width:'100%'}}>
      <Field
        name="title"
        label="What are we planning?"
        component={ props => bridgeReduxFormField(TextInputField, props) }
        validate={[requiredValidation]}
        required
        disabled={submitting}
      />
      <FormGroup>
        <Label shrink >Who's coming?</Label>
        <FlexContainer>
          {
            participants.map(({uid, displayName, photoURL}) => (
              <Field
                name={`participants.${uid}`}
                key={displayName}
                label={displayName}
                component={ props => bridgeReduxFormField(ImageCheckboxField, props) }
                disabled={submitting || uid === me}
                imageUrl={photoURL}
              />))
          }
        </FlexContainer>
      </FormGroup>
    </div>
      <SubmitButton disabled={ submitting || pristine || invalid }/>
  </Form>
);

const mapDispatchToProps = { saveEvent };
const mapStateToProps = state => ({
  participants: selectProfiles(state),
  me: selectCurrentUserId(state),
  initialValues: {
    participants: {
      [selectCurrentUserId(state)]: true
    }
  }
});

const NewEventReduxForm = reduxForm({
  form: 'newEvent',
  onSubmitSuccess: (result, dispatch, props)  => props.onSuccess()
})(NewEventForm);

export default connect(mapStateToProps, mapDispatchToProps)(NewEventReduxForm);
