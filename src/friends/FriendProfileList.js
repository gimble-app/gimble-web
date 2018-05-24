import React, {Component} from 'react';
import {withFirestore} from 'react-redux-firebase';
import FriendEntry from "./FriendEntry";
import {connect} from "react-redux";
import {compose} from "redux";
import {selectMyProfileWithFriends} from "../profile/selectors";
import {PROFILES_COLLECTION} from "./firestoreQueries";

class FriendProfileList extends Component {

  state = {
    friends: {}
  };

  componentDidMount() {
    this._loadFriends(this.props.firebase, this.state.friends);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    console.log(prevProps)
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
    this.setState({ friends: newFriends });
  };

  render () {
    console.log(this.props)
    const { friends } = this.state;
    return (
      Object.values(friends).map(friend => <FriendEntry id={friend.email} friend={friend} />)
    );
  }
}

export default withFirestore(compose(
  connect(state => ({
    friends: selectMyProfileWithFriends(state)
  })),
)(FriendProfileList));
