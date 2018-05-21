import {
  invite,
  rescind,
  accept,
  INVITE_SUCCESS,
  INVITE_FAILURE,
  RESCIND_SUCCESS,
  RESCIND_FAILURE,
  ACCEPT_SUCCESS,
  ACCEPT_FAILURE
} from "./actions";
import {SEND_NOTIFICATION} from "../notifications/actions";
import setupStore from "../__mocks__/mockStore";

jest.mock('../auth/selectors', () => ({ selectCurrentUserId: () => 'some-uid' }));
jest.mock('../profile/selectors', () => ({ selectMyDisplayName: () => 'some-name' }));

describe('friends actions', () => {

  const requestFriendMock = jest.fn();
  const rescindFriendRequestMock = jest.fn();
  const acceptFriendRequestMock = jest.fn();

  const getRemoteFunction = (name) => {
    const functions = {
      rescindFriendRequest: rescindFriendRequestMock,
      requestFriend: requestFriendMock,
      acceptFriendRequest: acceptFriendRequestMock
    };
    return functions[name];
  };
  const mockStore = setupStore({ getRemoteFunction });
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  describe('invite friend', () => {
    it('saves an invite for the friend', async () => {
      requestFriendMock.mockReturnValue(Promise.resolve());

      await store.dispatch(invite('some@email.com'));

      expect(requestFriendMock).toBeCalledWith({ from: 'some-uid', fromName: 'some-name', to: 'some@email.com' });
      expect(store.getActions()).toEqual([
        {
          data: { message: INVITE_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an invite fails', async () => {
      requestFriendMock.mockReturnValue(Promise.reject("some error"));

      await store.dispatch(invite('some@email.com'));

      expect(store.getActions()).toEqual([
        {
          data: { message: INVITE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });

  describe('rescind invite', () => {
    it('rescinds an invite', async () => {
      rescindFriendRequestMock.mockReturnValue(Promise.resolve());

      await store.dispatch(rescind('some-id'));

      expect(rescindFriendRequestMock).toBeCalledWith({ id: 'some-id' });
      expect(store.getActions()).toEqual([
        {
          data: { message: RESCIND_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an rescind fails', async () => {
      rescindFriendRequestMock.mockReturnValue(Promise.reject("some error"));

      await store.dispatch(rescind('some-id'));

      expect(store.getActions()).toEqual([
        {
          data: { message: RESCIND_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });

  describe('accept invite', () => {
    it('accepts an invite', async () => {
      acceptFriendRequestMock.mockReturnValue(Promise.resolve());

      await store.dispatch(accept('some-id'));

      expect(acceptFriendRequestMock).toBeCalledWith({ requestId: 'some-id' });
      expect(store.getActions()).toEqual([
        {
          data: { message: ACCEPT_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an rescind fails', async () => {
      acceptFriendRequestMock.mockReturnValue(Promise.reject("some error"));

      await store.dispatch(accept('some-id'));

      expect(store.getActions()).toEqual([
        {
          data: { message: ACCEPT_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });
});
