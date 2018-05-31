import {EVENTS_COLLECTION} from "../firestoreQueries";
import {update} from "../../clients/firebase";

export const addFriend = (event, friendId) =>
  async (dispatch, getState, {getFirestore}) => {
    const participantData = event.participants;
    event.participants[friendId] = true;
    return update(EVENTS_COLLECTION, event.id, participantData, getFirestore);
  };

