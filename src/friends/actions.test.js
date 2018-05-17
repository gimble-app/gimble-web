import {
  invite,
  INVITE_SUCCESS,
  INVITE_FAILURE
} from "./actions";
import {create} from "../clients/firebase";
import {SEND_NOTIFICATION} from "../notifications/actions";
import setupStore from "../__mocks__/mockStore";

jest.mock('../auth/selectors', () => ({
  selectCurrentUserId: () => 'some-uid'
}));

jest.mock('../clients/firebase', () => ({
  create: jest.fn(),
}));

describe('friends actions', () => {

  const getFirestore = jest.fn();
  const mockStore = setupStore({ getFirestore });

  let store;

  beforeEach(() => {
    store = mockStore();
  });

  describe('invite friend', () => {
    it('saves an invite for the friend', async () => {
      create.mockReturnValue(Promise.resolve());

      await store.dispatch(invite('some@email.com'));
      expect(create).toBeCalledWith("friendRequests", { from: 'some-uid', to: 'some@email.com' }, getFirestore);

      expect(store.getActions()).toEqual([
        {
          data: { message: INVITE_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an invite fails', async () => {
      create.mockReturnValue(Promise.reject("some error"));

      await store.dispatch(invite('some@email.com'));

      expect(store.getActions()).toEqual([
        {
          data: { message: INVITE_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });
});
