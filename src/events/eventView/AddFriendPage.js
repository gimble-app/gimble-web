import React, {Fragment} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {selectFriendRefs} from "../../friends/selectors";
import FriendProfileList from "../../friends/FriendProfileList";
import CancelButton from "../../common/CancelButton";
import TitleText from "../../common/typography/TitleText";
import Page from "../../common/Page";
import {addFriend} from "./actions";
import {selectEventFromId} from "../eventEdit/selectors";

const AddFriendPage = ({ friends, event, addFriend, history }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <CancelButton />
        <TitleText>Add a friend</TitleText>
      </Toolbar>
    </AppBar>
    <Page>
      <FriendProfileList onSelect={async (id) => {
        await addFriend(event, id);
        history.goBack();
      }} friends={friends} />
    </Page>
  </Fragment>
);
const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {},
  friends: selectFriendRefs(state)
});

export default connect(mapStateToProps, {
  addFriend
})(withRouter(AddFriendPage));

