import notifications, { selectNextNotification } from './reducers';
import stubbedUuid from 'uuid/v4';
jest.mock('uuid/v4', () => jest.fn());

describe('notificationReducer', () => {

  it('defaults to an empty object', () => {
    const action = { type: 'UNKNOWN_ACTION' };

    const result = notifications(undefined, action);
    expect(result).toEqual({});
  })

  it('returns the current list for an unknown action', () => {
    const initialState = { '1' : { message: 'some-message' } };
    const action = { type: 'UNKNOWN_ACTION' };

    const result = notifications(initialState, action);

    expect(result).toEqual(initialState);
  });

  it('adds a notification on SEND_NOTIFICATION', () => {
    stubbedUuid.mockReturnValue('stub-id');
    const initialState = {};
    const action = { type: 'SEND_NOTIFICATION', data: { message: 'hello' } };

    const result = notifications(initialState, action);

    expect(result).toEqual({"stub-id": {"id": "stub-id", "message": "hello"}});
  });

  it('removes the notification on NOTIFICATION_DISMISSED', () => {
    const initialState = { 'some-id' : { message: 'some-message' } };
    const action = { type: 'NOTIFICATION_DISMISSED', data: { id: 'some-id'} };

    const result = notifications(initialState, action);

    expect(result).toEqual({});
  });
});

describe('selectNextNotification', () => {
  it('returns undefined if no notifications exist', () => {
    const state = { notifications: {}};

    const next = selectNextNotification(state);

    expect(next).toBeUndefined();
  });

  it('returns a notification when some exist', () => {
    const state = {
      notifications: {"stub-id": {"id": "stub-id", "message": "hello"}}
    }

    const next = selectNextNotification(state);

    expect(next).toEqual({"id": "stub-id", "message": "hello"})
  });
})
