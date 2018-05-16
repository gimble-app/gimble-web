import {
  invite,
  INVITE_SUCCESS,
  INVITE_FAILURE
} from "./actions";
import {createWithQuery} from "../clients/firebase";
import {SEND_NOTIFICATION} from "../notifications/actions";
import setupStore from "../__mocks__/mockStore";

jest.mock('../auth/selectors', () => ({
  selectCurrentUserId: () => 'some-uid'
}));

jest.mock('../clients/firebase', () => ({
  createWithQuery: jest.fn(),
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
      createWithQuery.mockReturnValue(Promise.resolve());

      await store.dispatch(invite('some@email.com'));
      expect(createWithQuery).toBeCalledWith(
        { collection: "friends", doc: "some-uid", subcollections: [{collection: "requested", doc: "some@email.com"}]},
        { email: 'some@email.com' },
        getFirestore
      );

      expect(store.getActions()).toEqual([
        {
          data: { message: INVITE_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('notifies when an invite fails', async () => {
      createWithQuery.mockReturnValue(Promise.reject("some error"));

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
