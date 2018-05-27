import React, {Component} from 'react';
import {withFirestore} from 'react-redux-firebase';
import FriendEntry from "./FriendEntry";
import {connect} from "react-redux";
import {compose} from "redux";
import List from "material-ui/List";
import {selectMyProfileWithFriends} from "../profile/selectors";
import {getFriendProfiles} from "./friendProfileData";

class FriendProfileList extends Component {

  state = {
    friends: {},
    friendsList: []
  };

  componentDidMount() {
    return this._loadFriends(this.props.firebase, this.state.friends);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    return (prevProps.friends !== prevState.friends) ? prevProps.friends : null;
  }

  _loadFriends = async (firebase, friends) => {
    const friendDetails = await getFriendProfiles(firebase.firestore(), Object.keys(friends));
    this.setState({ friendsList: friendDetails });
  };

  render () {
    const { friendsList } = this.state;
    return (
      <List dense>
        { friendsList.map(friend => <FriendEntry key={friend.uid} friend={friend} />) }
      </List>
    );
  }
}

export default withFirestore(compose(
  connect(state => ({
    friends: selectMyProfileWithFriends(state)
  })),
)(FriendProfileList));
