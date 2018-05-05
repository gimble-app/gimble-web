import { saveEvent, EVENT_SAVE_SUCCESS, EVENT_SAVE_FAILURE } from './actions';
import { SEND_NOTIFICATION } from '../../notifications/actions'
import uuid from 'uuid/v4';
import setupStore from './__mocks__/mockStore';

export const firestore = {
  set: jest.fn(),
  update: jest.fn()
};

const mockStore = setupStore({
  getFirestore: () => firestore
});

jest.mock('uuid/v4');
uuid.mockReturnValue('generated-id');

describe('saveEvent', () => {

  let store;

  beforeEach(() => {
    store = mockStore({ firebase: { auth: { uid: 'some-uid' } } });
  });

  it('saves a new event with author and generated id', async () => {
    firestore.set.mockReturnValue(Promise.resolve());
    const event = { title: 'title ' }

    await store.dispatch(saveEvent(event));

    expect(firestore.set).toBeCalledWith('events/generated-id',
      {
        author: 'some-uid',
        id: 'generated-id',
        ...event
      });
    expect(store.getActions()).toEqual([
      {
        data: { message: EVENT_SAVE_SUCCESS },
        type: SEND_NOTIFICATION
      }
    ]);
  });

  it('updates an existing event', async () => {
    firestore.update.mockReturnValue(Promise.resolve());
    const event = {
      author: 'some-author',
      id: 'existing-id',
      title: 'title '
    };

    await store.dispatch(saveEvent(event));

    expect(firestore.update).toBeCalledWith('events/existing-id',
      {
        id: 'existing-id',
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
