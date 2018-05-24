import React, {Component} from 'react';
import {withFirestore} from 'react-redux-firebase';
import FriendEntry from "./FriendEntry";
import {connect} from "react-redux";
import {compose} from "redux";
import List from "material-ui/List";
import {selectMyProfileWithFriends} from "../profile/selectors";
import {PROFILES_COLLECTION} from "../profile/firestoreQueries";

class FriendProfileList extends Component {

  state = {
    friends: {},
    friendsList: []
  };

  componentDidMount() {
    this._loadFriends(this.props.firebase, this.state.friends);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    return (prevProps.friends !== prevState.friends) ? prevProps.friends : null;
  }

  _lookupProfileData = async (ref) => {
    try {
      const snapshot = await ref.get();
      return snapshot.data();
    }
    catch (e) {
      console.log('errored while trying to load profile info for friend', e);
      return {};
    }
  };

  _loadFriends = async (firebase, friends) => {
    const result = await Promise.all(
      Object.keys(friends)
      .map(id => firebase.firestore().doc(`${PROFILES_COLLECTION}/${id}`))
      .map(this._lookupProfileData)
    );
    const newFriends = result.map(data => ({
      uid: data.uid,
      photoURL: data.photoURL,
      displayName: data.displayName,
    }));
    this.setState({ friendsList: newFriends });
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
