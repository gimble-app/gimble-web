import {
  invite,
  rescind,
  INVITE_SUCCESS,
  INVITE_FAILURE,
  RESCIND_SUCCESS,
  RESCIND_FAILURE
} from "./actions";
import {create, remove} from "../clients/firebase";
import {SEND_NOTIFICATION} from "../notifications/actions";
import setupStore from "../__mocks__/mockStore";
import {selectMyDisplayName} from "../profile/selectors";

jest.mock('../auth/selectors', () => ({
  selectCurrentUserId: () => 'some-uid'
}));

jest.mock('../profile/selectors', () => ({
  selectMyDisplayName: () => 'some-name'
}));

jest.mock('../clients/firebase', () => ({
  create: jest.fn(),
  remove: jest.fn(),
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

      expect(create).toBeCalledWith("friendRequests", { from: 'some-uid', fromName: 'some-name', to: 'some@email.com' }, getFirestore);
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

  describe('recind invite', () => {
    it('rescinds an invite', async () => {
      remove.mockReturnValue(Promise.resolve());

      await store.dispatch(rescind('some-id'));

      expect(remove).toBeCalledWith("friendRequests", 'some-id', getFirestore);
      expect(store.getActions()).toEqual([
        {
          data: { message: RESCIND_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an rescind fails', async () => {
      remove.mockReturnValue(Promise.reject("some error"));

      await store.dispatch(rescind('some-id'));

      expect(store.getActions()).toEqual([
        {
          data: { message: RESCIND_FAILURE },
          type: SEND_NOTIFICATION
        }
      ]);
    });
  });
});
