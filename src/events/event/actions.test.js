import {
  saveEvent,
  deleteEvent,
  EVENT_SAVE_SUCCESS,
  EVENT_SAVE_FAILURE,
  EVENT_DELETE_SUCCESS,
  EVENT_DELETE_FAILURE
} from './actions';
import { SEND_NOTIFICATION } from '../../notifications/actions'
import setupStore from './__mocks__/mockStore';
import { create, update, remove } from '../../clients/firebase';

jest.mock('../../clients/firebase', () => ({
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
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
    it('saves a new event with author', async () => {
      create.mockReturnValue(Promise.resolve());
      const event = {
        title: 'title'
      }

      await store.dispatch(saveEvent(event));

      expect(create).toBeCalledWith('events',
        {
          author: 'some-uid',
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

    it('updates an existing event', async () => {
      update.mockReturnValue(Promise.resolve());
      const event = {
        title: 'title'
      };

      await store.dispatch(saveEvent(event, 'existing-id'));

      expect(update).toBeCalledWith('events', 'existing-id', event, getFirestore);
      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an update fails', async () => {
      update.mockReturnValue(Promise.reject("some error"));
      const event = {
        title: 'title'
      };
      await store.dispatch(saveEvent(event, 'existing-id'));

      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    describe('deleteEvent', () => {

      it('deletes an event', async () => {
        remove.mockReturnValue(Promise.resolve());

        await store.dispatch(deleteEvent('some-id'));

        expect(remove).toBeCalledWith('events', 'some-id', getFirestore);

        expect(store.getActions()).toEqual([
          {
            data: { message: EVENT_DELETE_SUCCESS },
            type: SEND_NOTIFICATION
          }
        ]);
      });

      it('notifies when an delete fails', async () => {
        remove.mockReturnValue(Promise.reject("some error"));

        await store.dispatch(deleteEvent('some-id'));

        expect(store.getActions()).toEqual([
          {
            data: { message: EVENT_DELETE_FAILURE },
            type: SEND_NOTIFICATION
          }
        ]);
      });
    });
  });
});
