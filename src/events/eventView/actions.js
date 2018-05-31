import {EVENTS_COLLECTION} from "../firestoreQueries";
import {update} from "../../clients/firebase";
import {sendNotification} from "../../notifications/actions";

export const FRIEND_ADD_FAILURE = 'could not add friend to event';

export const addFriend = (event, friendId) =>
  async (dispatch, getState, {getFirestore}) => {
    event.participants[friendId] = true;
    const participantData = event.participants;
    try {
      await update(EVENTS_COLLECTION, event.id, { participants: participantData }, getFirestore);
    } catch (error) {
      dispatch(sendNotification(FRIEND_ADD_FAILURE));
      console.log(error);
    }
  };

