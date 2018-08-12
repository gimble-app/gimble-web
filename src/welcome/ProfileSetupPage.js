import React from 'react';
import {connect} from 'react-redux';
import {TextField} from 'redux-form-material-ui';
import {Field, reduxForm} from 'redux-form'
import {setProfileName} from "./actions";
import ActionList from "../timeline/Timeline";
import ActionListItem from "../timeline/TimelineEvent";
import LastActionItem from "../timeline/TimelineNode";
import ActionSection from "./ActionSection";
import BigRedButton from "../common/buttons/BigRedButton";
import SubheadingText from "../common/typography/SubheadingText";
import ActionsForm from "./ActionsForm";
import BorderedBigAvatar from "../common/avatars/BorderedBigAvatar";

const ProfileSetupPage = ({ profile, submitting, handleSubmit, dirty, setProfileName }) => (
  <ActionsForm onSubmit={handleSubmit(setProfileName)}>
    <BorderedBigAvatar src={profile && profile.photoURL } />
    <ActionList>
      <ActionListItem>
        <ActionSection>
          <SubheadingText>They call me...</SubheadingText>
          <Field
            name="profileName"
            component={TextField}
            type="text"
            autoFocus
            fullWidth
            disabled={submitting}
          />
        </ActionSection>
      </ActionListItem>
      <LastActionItem topOffset={"10vh"}>
        <BigRedButton
          type="submit"
          variant="flat"
          disabled={ submitting || !dirty }
          right="100%"
        >welcome</BigRedButton>
      </LastActionItem>
    </ActionList>
  </ActionsForm>
);

const mapDispatchToProps = { setProfileName };

const ConnectedProfileNameForm = connect(
    () => ({}),
    mapDispatchToProps
)(ProfileSetupPage);

export default reduxForm({
  form: 'profileName'
})(ConnectedProfileNameForm);
