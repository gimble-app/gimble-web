
import {
  accept,
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
