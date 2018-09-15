import {EVENTS_COLLECTION} from "../../firestoreQueries";
import {getDocData, updateDoc} from "../../../clients/firebase";
import {sendNotification} from "../../../notifications/actions";
import {selectCurrentUserId} from '../../../auth/selectors';
import uuid from "uuid/v4";

export const EVENT_SAVE_FAILURE = 'event failed to save';

export const updateDateRange = ({range, uid}, event) =>
  async (dispatch, getState, {getFirestore}) => {
    const myUid = selectCurrentUserId(getState());

    try {

      const firestore = getFirestore();
      const eventData = await getDocData(`${EVENTS_COLLECTION}/${event.id}`, firestore);
      const currentDates = eventData.participants[myUid]
        .preferredDates
        .filter(date => date.uid !== uid) || [];

      const { from, to } = range;
      await updateDoc(`${EVENTS_COLLECTION}/${event.id}`, {
        [`participants.${myUid}.preferredDates`]: [
          ...currentDates, {
            from: from.format('YYYY-MM-DD'),
            to: to.format('YYYY-MM-DD'),
            uid
          }
        ]
      }, firestore);

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };

export const addPreferredDateRange = ({range}, event) =>
  async (dispatch, getState, {getFirestore}) => {
  const myUid = selectCurrentUserId(getState());
    try {

      const firestore = getFirestore();
      const eventData = await getDocData(`${EVENTS_COLLECTION}/${event.id}`, firestore);
      const currentDates = eventData.participants[myUid].preferredDates || [];
      const { from, to } = range;

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
      const currentDates = eventData.participants[myUid]
      .preferredDates
      .filter(date => date.uid !== uid) || [];

      await updateDoc(`${EVENTS_COLLECTION}/${event.id}`, {
        [`participants.${myUid}.preferredDates`]: currentDates
      }, firestore);

    } catch (error) {
      dispatch(sendNotification(EVENT_SAVE_FAILURE));
      console.log(error);
    }
  };

export const setEventDates = ({range}, event) =>
  async (dispatch, getState, {getFirestore}) => {
    try {
      const {from, to} = range;
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
