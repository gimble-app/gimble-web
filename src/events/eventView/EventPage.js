import React, {Fragment} from "react";
import Paper from "material-ui/Paper";
import {connect} from "react-redux";
import styled from "styled-components/";
import {withTheme} from "material-ui/styles";
import Page from "../../common/Page";
import EventPageToolbar from "./EventPageToolbar";
import {selectEventFromId} from "../eventEdit/selectors";
import MembersChipsList from "./MembersChipsList";
import EditButton from "./EditButton";
import Typography from "material-ui/Typography";

const Header = withTheme()(styled(Paper)`
  background: ${({theme}) => theme.palette.secondary.main};
  padding: ${({theme}) => theme.spacing.unit }px;
  min-height: 140px;
`);

const HeaderTitleText = withTheme()(styled(Typography)`
  color: ${({theme}) => theme.palette.secondary.contrastText};
`);

export const EventPage = ({ event }) => (
  <Fragment>
    <Header>
      <EventPageToolbar id={ event.id }/>
      <HeaderTitleText
        variant="display1"
        color="inherit"
      >{event.title }<EditButton id={event.id}/></HeaderTitleText>
    </Header>
    <Page>
      <MembersChipsList members={ event.members } />
    </Page>
  </Fragment>
);

const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {}
});

export default connect(mapStateToProps)(EventPage);


