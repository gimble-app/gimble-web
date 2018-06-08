import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {requestsFromUserCollection} from "../friends/firestoreQueries";
import CancelButton from "../common/CancelButton";
import TitleText from "../common/typography/TitleText";
import Page from "../common/Page";
import AddFriendForm from "./AddFriendForm";
import RequestedList from "../friends/RequestedList";
import {selectRequestedFriends} from "../friends/selectors";

export class InviteScreen extends Component {

  state = {
    fieldValues: {}
  };

  onChange = field => {
    this.setState({
      fieldValues: {
        ...this.state.fieldValues,
        ...field
      }
    });
  };

  render () {
    const { requested } = this.props;

    return (
      <Fragment>
        <AppBar position="static">
          <Toolbar>
            <CancelButton />
            <TitleText>Invite friends</TitleText>
          </Toolbar>
        </AppBar>
        <Page>
          <AddFriendForm />
          {requested && requested.length > 0 && <RequestedList requested={requested} /> }
        </Page>
      </Fragment>
    );
  }
}

export default compose(
  firebaseConnect(),
  firestoreConnect((state) => [
    requestsFromUserCollection(state),
  ]),
  connect(state => ({
    requested: selectRequestedFriends(state),
  }))
)(InviteScreen);
