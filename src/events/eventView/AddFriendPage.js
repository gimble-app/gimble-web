import React, {Fragment} from "react";
import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {selectFriendRefs} from "../../friends/selectors";
import FriendProfileList from "../../friends/FriendProfileList";
import CancelButton from "../../common/CancelButton";
import ToolbarTitleText from "../../common/ToolbarTitleText";
import Page from "../../common/Page";

const AddFriendPage = ({ friends }) => (
  <Fragment>
    <AppBar position="static">
      <Toolbar>
        <CancelButton />
        <ToolbarTitleText>Add a friend</ToolbarTitleText>
      </Toolbar>
    </AppBar>
    <Page>
      <FriendProfileList onSelect={(id) => console.log(id)} friends={friends} />
    </Page>
  </Fragment>
);

export default connect(state => ({
  friends: selectFriendRefs(state)
}))(AddFriendPage);
