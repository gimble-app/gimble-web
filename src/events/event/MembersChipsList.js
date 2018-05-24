import React, {Component} from 'react';
import {withFirestore} from 'react-redux-firebase';
import Chip from "material-ui/Chip";
import Avatar from "material-ui/Avatar";
import {PROFILES_COLLECTION} from "../../profile/firestoreQueries";

class FriendProfileList extends Component {

  state = {
    members: {},
    membersList: []
  };

  componentDidMount() {
    this._loadFriends(this.props.firebase, this.props.members);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    return (prevProps.members !== prevState.members) ? prevProps.members : null;
  }

  _lookupProfileData = async (ref) => {
    try {
      const snapshot = await ref.get();
      return snapshot.data();
    }
    catch (e) {
      console.log('errored while trying to load profile info for member', e);
      return {};
    }
  };

  _loadFriends = async (firebase, members) => {
    const result = await Promise.all(
      Object.keys(members)
      .map(id => firebase.firestore().doc(`${PROFILES_COLLECTION}/${id}`))
      .map(this._lookupProfileData)
    );
    const newMembers = result.map(data => ({
      uid: data.uid,
      photoURL: data.photoURL,
      displayName: data.displayName,
    }));
    this.setState({ membersList: newMembers });
  };

  render () {
    const { membersList } = this.state;
    return membersList.map(member => <Chip
          avatar={<Avatar src={member.photoUrl} />}
          label={member.displayName}
          key={member.uid}
        />
    );
  }
}

export default withFirestore(FriendProfileList);
