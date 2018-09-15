import moment from "moment";
import {
  addPreferredDateRange,
  EVENT_SAVE_FAILURE,
  removePreferredDate, setEventDates,
} from './actions';
import {SEND_NOTIFICATION} from '../../../notifications/actions';
import setupStore from '../../../__mocks__/mockStore';
import {getDocData, updateDoc} from '../../../clients/firebase';
import {selectCurrentUserId} from '../../../auth/selectors';
import uuid from "uuid/v4";

jest.mock('uuid/v4');
jest.mock('../../../clients/firebase');
jest.mock('../../../auth/selectors');

describe('event actions', () => {

  let baseEventData;
  const getFirestore = jest.fn();
  const mockStore = setupStore({ getFirestore });
  let store;
  const stubFirestore = {};

  beforeEach(() => {
    updateDoc.mockReset();
    getDocData.mockReset();

    getFirestore.mockReturnValue(stubFirestore);
    store = mockStore();

    uuid.mockReturnValue('generated-id');
    selectCurrentUserId.mockReturnValue('my-id');
    baseEventData = {
      participants: {
        ['my-id']: {
          uid: 'my-id'
        }
      }
    };
  });

  describe('removePreferredDate', () => {

    it('Deletes the date preference', async () => {
      baseEventData.participants['my-id'].preferredDates = [
        { from: '2001-09-28', to: '2001-10-19', uid: 'id1'},
        { from: '2001-09-29', to: '2001-10-20', uid: 'id2'}
      ];
      getDocData.mockReturnValue(Promise.resolve(baseEventData));

      await store.dispatch(removePreferredDate('id2', { id: 'event-id'} ));

      expect(updateDoc).toBeCalledWith(
        'events/event-id',
        {["participants.my-id.preferredDates"]: [{ from: '2001-09-28', to: '2001-10-19', uid: 'id1' }]},
        stubFirestore
      );
    });

    it('notifies when an update fails', async () => {
      getDocData.mockReturnValue(Promise.resolve(baseEventData));
      updateDoc.mockReturnValue(Promise.reject());

      await store.dispatch(removePreferredDate('id2', { id: 'event-id'}));

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });

  describe('setEventDates', () => {

    const range = {
      from: moment('2001-09-29T12:00:00+02:00'),
      to: moment('2001-10-20T12:00:00+02:00')
    };


    it('Saves a date to the event', async () => {
      await store.dispatch(setEventDates({range}, { id: 'event-id'}));

      expect(updateDoc).toBeCalledWith(
        'events/event-id',
        {
          dates: {from: '2001-09-29', to: '2001-10-20'}
        },
        stubFirestore
      );
    });

    it('notifies when an update fails', async () => {
      getDocData.mockReturnValue(Promise.resolve(baseEventData));
      updateDoc.mockReturnValue(Promise.reject());

      await store.dispatch(setEventDates({range}, { id: 'event-id'}));

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });

  describe('addPreferredDateRange', () => {

    const range = {
      from: moment('2001-09-29T12:00:00+02:00'),
      to: moment('2001-10-20T12:00:00+02:00')
    };

    it('It adds a first date preference', async () => {

      baseEventData.participants['my-id'].preferredDates = undefined;
      getDocData.mockReturnValue(Promise.resolve(baseEventData));
      updateDoc.mockReturnValue(Promise.resolve());

      await store.dispatch(addPreferredDateRange({ range }, { id: 'event-id'}));

      expect(updateDoc).toBeCalledWith(
        'events/event-id',
        {["participants.my-id.preferredDates"]: [{from: '2001-09-29', to: '2001-10-20', uid: 'generated-id'}]},
        stubFirestore
      );
    });

    it('It adds a date preference to the list', async () => {

      baseEventData.participants['my-id'].preferredDates = [{ from: '2001-09-28', to: '2001-10-19', uid: 'generated-id' }];
      getDocData.mockReturnValue(Promise.resolve(baseEventData));
      updateDoc.mockReturnValue(Promise.resolve());

      await store.dispatch(addPreferredDateRange({ range }, { id: 'event-id'}));

      expect(updateDoc).toBeCalledWith(
        'events/event-id',
        {["participants.my-id.preferredDates"]: [{ from: '2001-09-28', to: '2001-10-19', uid: 'generated-id'}, { from: '2001-09-29', to: '2001-10-20', uid: 'generated-id'}]},
        stubFirestore
      );
    });

    it('notifies when an update fails', async () => {
      getDocData.mockReturnValue(Promise.resolve(baseEventData));
      updateDoc.mockReturnValue(Promise.reject());

      await store.dispatch(addPreferredDateRange({ range }, { id: 'event-id'}));

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });
});
