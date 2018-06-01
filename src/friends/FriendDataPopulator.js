import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {myProfile, myProfileWithFriends} from "../profile/firestoreQueries";
import {compose} from "redux";
import {mapFriendProfiles} from "./actions";
import {selectFriendRefs} from "./selectors";

const FriendDataPopulator = ({ friends, mapFriends }) => {
  friends && mapFriends(friends);
  return null;
}

const mapDispatchToProps = { mapFriends: mapFriendProfiles };

export default compose(
  firebaseConnect(),
  firestoreConnect(
    state => [myProfile(state), myProfileWithFriends(state)]
  ),
  connect((state) => ({ friends: selectFriendRefs(state)}), mapDispatchToProps),
)(FriendDataPopulator);
