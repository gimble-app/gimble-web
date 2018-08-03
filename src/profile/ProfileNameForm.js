import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form'
import Button from "@material-ui/core/Button";
import {withTheme} from "@material-ui/core";
import { setProfileName } from "./actions";
import BigAvatar from "../common/BigAvatar";
import CentredFlex from "../common/layout/CentredFlex";
import Timeline from "../timeline/Timeline";
import TimelineEvent from "../timeline/TimelineEvent";
import TimelineProfileEventSummary from "./TimelineProfileEventSummary";

const CentredPanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

const ProfileNameForm = ({ profile, submitting, handleSubmit, dirty, setProfileName }) => (
  <form onSubmit={handleSubmit(setProfileName)}>
    <CentredPanel>
      <BigAvatar src={profile && profile.photoURL }>?</BigAvatar>
      <Timeline endPadding={"100px"}>
        <TimelineEvent>
          <TimelineProfileEventSummary>
            <Field
              name="profileName"
              component={TextField}
              type="text"
              autoFocus
              fullWidth
              label="They call me..."
              disabled={submitting}
            />
          </TimelineProfileEventSummary>
        </TimelineEvent>
      </Timeline>
      <Button
        type="submit"
        variant="flat"
        disabled={ submitting || !dirty }
      >welcome</Button>
    </CentredPanel>
  </form>
);

const mapDispatchToProps = { setProfileName };

const ConnectedProfileNameForm = connect(
    () => ({}),
    mapDispatchToProps
)(ProfileNameForm);

export default reduxForm({
  form: 'profileName'
})(ConnectedProfileNameForm);
