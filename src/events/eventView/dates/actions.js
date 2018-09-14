import {EVENTS_COLLECTION} from "../../firestoreQueries";
import {getDocData, updateDoc} from "../../../clients/firebase";
import {sendNotification} from "../../../notifications/actions";
import {selectCurrentUserId} from '../../../auth/selectors';
import uuid from "uuid/v4";

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
              ...currentDates, {
              from: from.format('YYYY-MM-DD'),
              to: to.format('YYYY-MM-DD'),
              uid: uuid()
            }
          ]
      }, firestore);

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };

export const removePreferredDate = (uid, event) =>
  async (dispatch, getState, {getFirestore}) => {
    const myUid = selectCurrentUserId(getState());
    try {
      const firestore = getFirestore();
      const eventData = await getDocData(`${EVENTS_COLLECTION}/${event.id}`, firestore);
      const currentDates = eventData.participants[myUid].preferredDates || [];
      await updateDoc(`${EVENTS_COLLECTION}/${event.id}`, {
        [`participants.${myUid}.preferredDates`]: currentDates.filter(date => date.uid !== uid)
      }, firestore);

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };

export const setEventDates = ({from, to}, event) =>
  async (dispatch, getState, {getFirestore}) => {
    try {
      const firestore = getFirestore();
      await updateDoc(`${EVENTS_COLLECTION}/${event.id}`, {
        dates: {
          from: from.format('YYYY-MM-DD'),
          to: to.format('YYYY-MM-DD'),
        }
      }, firestore)

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };
