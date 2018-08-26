import {
  saveEvent,
  EVENT_SAVE_SUCCESS,
  EVENT_SAVE_FAILURE,
} from './actions';
import { SEND_NOTIFICATION } from '../../notifications/actions'
import setupStore from '../../__mocks__/mockStore';
import { create } from '../../clients/firebase';

jest.mock('../../clients/firebase', () => ({
  create: jest.fn(),
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

  describe('saveEvent', () => {
    it('saves a new event with participants', async () => {
      create.mockReturnValue(Promise.resolve());
      const event = {
        title: 'title'
      }

      await store.dispatch(saveEvent(event));

      expect(create).toBeCalledWith('events',
        {
          participants: {'some-uid': true },
          ...event
        },
        getFirestore
      );

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an create fails', async () => {
      create.mockReturnValue(Promise.reject("some error"));
      const event = {
        title: 'title'
      };

      await store.dispatch(saveEvent(event));

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });
});
