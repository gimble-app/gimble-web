import {addPreferredDateRange, EVENT_SAVE_FAILURE,} from './actions';
import {SEND_NOTIFICATION} from '../../notifications/actions'
import setupStore from '../../__mocks__/mockStore';
import {getDocData, updateDoc} from '../../clients/firebase';
import {selectCurrentUserId} from '../../auth/selectors';
import moment from "moment";

jest.mock('../../clients/firebase');
jest.mock('../../auth/selectors');

describe('event actions', () => {

  let baseEventData;
  const getFirestore = jest.fn();
  const mockStore = setupStore({ getFirestore });
  let store;
  const stubFirestore = {};

  beforeEach(() => {

    getFirestore.mockReturnValue(stubFirestore);
    store = mockStore();
    selectCurrentUserId.mockReturnValue('my-id');
    baseEventData = {
      participants: {
        ['my-id']: {
          uid: 'my-id'
        }
      }
    };
  });

  describe('addPreferredDateRange', () => {

    [
      {
        given: undefined,
        then: [{ from: '2001-09-29', to: '2001-10-20'}]
      },
      {
        given: [{ from: '2001-09-28', to: '2001-10-19'}],
        then: [{ from: '2001-09-28', to: '2001-10-19'}, { from: '2001-09-29', to: '2001-10-20'}]
      }
    ].forEach(({given, then}) => (
      it(`Given ${JSON.stringify(given)}\n it adds the date preference`, async () => {

        baseEventData.participants['my-id'].preferredDates = given;
        getDocData.mockReturnValue(Promise.resolve(baseEventData));
        updateDoc.mockReturnValue(Promise.resolve());

        const range = {
          from: moment('2001-09-29T00:00:00+02:00'),
          to: moment('2001-10-20T00:00:00+02:00')
        };

        await store.dispatch(addPreferredDateRange(range, { id: 'event-id'}, { uid: 'my-id'}));

        expect(updateDoc).toBeCalledWith(
          'events/event-id',
          {["participants.my-id.preferredDates"]: then},
          stubFirestore
      );
      })
    ));

    it('notifies when an update fails', async () => {
      getDocData.mockReturnValue(Promise.resolve(baseEventData));
      updateDoc.mockReturnValue(Promise.reject());

      const range = {
        from: moment('2001-09-29T00:00:00+02:00'),
        to: moment('2001-10-20T00:00:00+02:00')
      };

      await store.dispatch(addPreferredDateRange(range, { id: 'event-id'}, { uid: 'my-id'}));

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });
});
