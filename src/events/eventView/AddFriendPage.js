import React, {Fragment} from "react";
import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {selectFriendRefs} from "../../friends/selectors";
import FriendProfileList from "../../friends/FriendProfileList";
import CancelButton from "../../common/CancelButton";
import ToolbarTitleText from "../../common/ToolbarTitleText";
import Page from "../../common/Page";
import {addFriend} from "./actions";
import {selectEventFromId} from "../eventEdit/selectors";

const AddFriendPage = ({ friends, event, addFriend }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <CancelButton />
        <ToolbarTitleText>Add a friend</ToolbarTitleText>
      </Toolbar>
    </AppBar>
    <Page>
      <FriendProfileList onSelect={(id) => addFriend(event, id)} friends={friends} />
    </Page>
  </Fragment>
);
const mapStateToProps = (state, { match }) => ({
  event: match.params.id ? selectEventFromId(state, match.params.id) : {},
  friends: selectFriendRefs(state)
});

export default connect(mapStateToProps, {
  addFriend
})(AddFriendPage);
