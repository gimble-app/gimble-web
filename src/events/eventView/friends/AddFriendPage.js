import React, {Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {selectFriendProfiles} from "../../../friends/selectors";
import CancelButton from "../../../common/buttons/HistoryAwareCancelButton";
import TitleText from "../../../common/typography/TitleText";
import Page from "../../../common/Page";
import {addFriend} from "../actions";
import {selectEventFromId} from "../../eventEdit/selectors";
import Participants from "./Participants";

const ChangeParticipantsPage = ({ friends, event }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <CancelButton />
        <TitleText>Change participants</TitleText>
      </Toolbar>
    </AppBar>
    <Page>
      <Participants participants={ event.participants } />
    </Page>
  </Fragment>
);
const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {},
  friends: selectFriendProfiles(state)
});

export default connect(mapStateToProps, {
  addFriend
})(withRouter(ChangeParticipantsPage));

