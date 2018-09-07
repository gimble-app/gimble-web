import {
  addPreferredDateRange,
  EVENT_SAVE_FAILURE,
} from './actions';
import { SEND_NOTIFICATION } from '../../notifications/actions'
import setupStore from '../../__mocks__/mockStore';
import { update } from '../../clients/firebase';
import moment from "moment";

jest.mock('../../clients/firebase', () => ({
  update: jest.fn(),
}));

jest.mock('../../auth/selectors', () => ({
  selectCurrentUserId: () => 'some-uid'
}));

describe('event actions', () => {

  const getFirestore = jest.fn();
  const mockStore = setupStore({ getFirestore });
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  describe('addPreferredDateRange', () => {
    it('updates the event with the participants preference', async () => {
      update.mockReturnValue(Promise.resolve());
      const event = { id: 'some-id' };
      const range = { from: moment('2001-09-29T00:00:00+02:00'), to: moment('2001-10-20T00:00:00+02:00')};
      const participant = { uid: 'some-uid'};

      await store.dispatch(addPreferredDateRange(range, event, participant));

      expect(update).toBeCalledWith('events', 'some-id',
        {
          ["participants.some-uid.preferredDates"]: [ { from: '2001-09-29T00:00:00+02:00', to: '2001-10-20T00:00:00+02:00'} ] }, getFirestore);
      });

    it('notifies when an update fails', async () => {
      update.mockReturnValue(Promise.reject("some error"));
      const event = { id: 'some-id' };
      const range = { from: moment('2001-09-29T00:00:00+02:00'), to: moment('2001-10-20T00:00:00+02:00')};
      const participant = { uid: 'some-uid'};

      await store.dispatch(addPreferredDateRange(range, event, participant));

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });
});
