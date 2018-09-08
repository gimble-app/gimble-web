import {EVENTS_COLLECTION} from "../../firestoreQueries";
import {getDocData, updateDoc} from "../../../clients/firebase";
import {sendNotification} from "../../../notifications/actions";
import {selectCurrentUserId} from '../../../auth/selectors';

export const EVENT_SAVE_FAILURE = 'event failed to save';

export const addPreferredDateRange = ({ from, to }, event) =>
  async (dispatch, getState, {getFirestore}) => {
  const myUid = selectCurrentUserId(getState());
    try {
      const firestore = getFirestore();
      const eventData = await getDocData(`${EVENTS_COLLECTION}/${event.id}`, firestore);
      const currentDates = eventData.participants[myUid].preferredDates || [];

      await updateDoc(`${EVENTS_COLLECTION}/${event.id}`, {
        [`participants.${myUid}.preferredDates`]: [
              ...currentDates, {from: from.format('YYYY-MM-DD'), to: to.format('YYYY-MM-DD')}
            ]
      }, firestore);

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };
