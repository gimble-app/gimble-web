import React from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";
import { TextField } from 'redux-form-material-ui';
import { Field, reduxForm } from 'redux-form'
import {withTheme} from "@material-ui/core";
import { setProfileName } from "./actions";
import BigAvatar from "../common/BigAvatar";
import CentredFlex from "../common/layout/CentredFlex";
import Timeline from "../timeline/Timeline";
import TimelineEvent from "../timeline/TimelineEvent";
import TimelineNode from "../timeline/TimelineNode";
import TimelineProfileEventSummary from "./TimelineProfileEventSummary";
import BigRedButton from "../common/buttons/BigRedButton";
import CaptionText from "../common/typography/CaptionText";

const CentredPanel = withTheme()(styled(CentredFlex)`
  margin:${({theme}) => theme.spacing.unit * 2}px 0px;
`);

const ProfileNameForm = ({ profile, submitting, handleSubmit, dirty, setProfileName }) => (
  <form onSubmit={handleSubmit(setProfileName)}>
    <CentredPanel>
      <BigAvatar src={profile && profile.photoURL }>?</BigAvatar>
      <Timeline endPadding="40px">
        <TimelineEvent>
          <TimelineProfileEventSummary>
            <CaptionText>They call me...</CaptionText>
            <Field
              name="profileName"
              component={TextField}
              type="text"
              autoFocus
              fullWidth
              disabled={submitting}
            />
          </TimelineProfileEventSummary>
        </TimelineEvent>
        <TimelineNode>
          <BigRedButton
            type="submit"
            variant="flat"
            disabled={ submitting || !dirty }
          >welcome</BigRedButton>
        </TimelineNode>
      </Timeline>
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
