import {EVENTS_COLLECTION} from "../../firestoreQueries";
import {getDocData, updateDoc} from "../../../clients/firebase";
import {sendNotification} from "../../../notifications/actions";

export const EVENT_SAVE_FAILURE = 'event failed to save';

export const addPreferredDateRange = ({ from, to }, event, participant) =>
  async (dispatch, getState, {getFirestore}) => {
    try {
      const firestore = getFirestore();
      const eventData = await getDocData(`${EVENTS_COLLECTION}/${event.id}`, firestore);
      const currentDates = eventData.participants[participant.uid].preferredDates || [];

      await updateDoc(`${EVENTS_COLLECTION}/${event.id}`, {
        [`participants.${participant.uid}.preferredDates`]: [
              ...currentDates, {from: from.format('YYYY-MM-DD'), to: to.format('YYYY-MM-DD')}
            ]
      }, firestore);

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };
