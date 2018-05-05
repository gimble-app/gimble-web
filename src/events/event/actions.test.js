import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { saveEvent, EVENT_SAVE_SUCCESS, EVENT_SAVE_FAILURE } from './actions';
import { SEND_NOTIFICATION } from '../../notifications/actions'
import uuid from 'uuid/v4';

jest.mock('uuid/v4');
uuid.mockReturnValue('generatedId');

const mockFirestoreSet = jest.fn();
const getFirestore = () => ({
  set: mockFirestoreSet
});

const mockStore = configureMockStore([
  thunk.withExtraArgument({ getFirestore })
]);

describe('saveEvent', () => {
  const store = mockStore({ firebase: { auth: { uid: 'some-uid' } } });

    it('saves a new event with author', async () => {
      mockFirestoreSet.mockReturnValue(Promise.resolve());
      const event = { title: 'title ' }

      await store.dispatch(saveEvent(event));

      expect(mockFirestoreSet).toBeCalledWith('events/generatedId',
        {
          author: 'some-uid',
          id: 'generatedId',
          ...event
        });
      expect(store.getActions()).toEqual([
        {
          data: { message: EVENT_SAVE_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });
});
