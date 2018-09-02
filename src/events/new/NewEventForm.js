import React from "react";
import Form from "../../common/forms/Form";
import {Field, reduxForm} from 'redux-form'
import {connect} from "react-redux";
import CheckIcon from '@material-ui/icons/Check';
import FormGroup from "../../common/forms/FormGroup";
import Label from "../../common/forms/Label";
import FlexContainer from "../../common/layout/FlexContainer";
import bridgeReduxFormField from "../../common/forms/bridgeReduxFormField";
import ImageCheckboxField from "../../common/forms/ImageCheckboxField";
import TextInputField from "../../common/forms/TextInputField";
import {saveEvent} from "./actions";
import {selectProfiles} from "../../profile/selectors";
import FloatingActionButtonSmall
  from "../../common/buttons/FloatingActionButtonSmall";

const requiredValidation = value => (value || typeof value === 'number' ? undefined : 'Required');

const NewEventForm = ({
  friends =[],
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
        component={
          props => bridgeReduxFormField(TextInputField, props)
        }
        autoFocus
        validate={[requiredValidation]}
        required
        disabled={submitting}
      />
      <FormGroup>
        <Label shrink >Who's coming?</Label>
        <FlexContainer>
          {
            friends.map(friend => (<Field
                name={`participants.${friend.uid}`}
                key={friend.displayName}
                label={friend.displayName}
                component={
                  props => bridgeReduxFormField(ImageCheckboxField, props)
                }
                disabled={submitting}
                imageUrl={friend.photoURL}
              />))
          }
        </FlexContainer>
      </FormGroup>
    </div>
      <FloatingActionButtonSmall
        type="submit"
        disabled={ submitting || pristine || invalid }
      ><CheckIcon /></FloatingActionButtonSmall>
  </Form>
);

const mapDispatchToProps = { saveEvent };
const mapStateToProps = state => ({
  profiles: selectProfiles(state),
});

const ConnectedNewEventForm = connect(mapStateToProps, mapDispatchToProps)(NewEventForm);

export default reduxForm({
  form: 'newEvent',
  onSubmitSuccess: (result, dispatch, props)  => props.onSuccess()
})(ConnectedNewEventForm);
