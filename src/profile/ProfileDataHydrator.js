import {connect} from "react-redux";
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {myProfile, myProfileWithFriends} from "./firestoreQueries";
import {compose} from "redux";
import {hydrateProfiles} from "./actions";
import {selectAllProfileUids} from "./selectors";

const ProfileDataPopulator = ({ profiles, mapProfiles }) => {
  profiles.length > 0 && mapProfiles(profiles);
  return null;
};

const mapDispatchToProps = { mapProfiles: hydrateProfiles };

export default compose(
  firebaseConnect(),
  firestoreConnect(
    state => [myProfile(state), myProfileWithFriends(state)]
  ),
  connect((state) => ({
      profiles: selectAllProfileUids(state)
    }),
    mapDispatchToProps
  ),
)(ProfileDataPopulator);
