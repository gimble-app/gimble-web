import {EVENTS_COLLECTION} from "../firestoreQueries";
import {getDocData, update, updateDoc} from "../../clients/firebase";
import {sendNotification} from "../../notifications/actions";

export const FRIEND_ADD_FAILURE = 'could not add friend to event';
export const EVENT_SAVE_FAILURE = 'event failed to save';

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

export const addPreferredDateRange = ({ from, to }, event, participant) =>
  async (dispatch, getState, {getFirestore}) => {
    try {
      const firestore = getFirestore();
      const eventData = await getDocData(`${EVENTS_COLLECTION}/${event.id}`, firestore);
      const currentDates = eventData.participants[participant.uid].preferredDates || [];

      await updateDoc(`${EVENTS_COLLECTION}/${event.id}`, {
        [`participants.${participant.uid}.preferredDates`]: [
              ...currentDates, {from: from.toDate(), to: to.toDate()}
            ]
      }, firestore);

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };
