import {
  setProfileName,
  UPDATE_PROFILE_SUCCESS,
} from "./actions";
import {SEND_NOTIFICATION} from "../notifications/actions";
import setupStore from "../__mocks__/mockStore";

describe('profile actions', () => {

  const registerUniqueProfileNameMock = jest.fn();

  const getRemoteFunction = (name) => {
    const functions = {
      registerUniqueProfileName: registerUniqueProfileNameMock,
    };
    return functions[name];
  };
  const mockStore = setupStore({ getRemoteFunction });
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  describe('set profile name', () => {
    it('sets a profile name', async () => {
      registerUniqueProfileNameMock.mockReturnValue(Promise.resolve());

      await store.dispatch(setProfileName({ profileName: 'some-name' }));

      expect(registerUniqueProfileNameMock).toBeCalledWith({ profileName: 'some-name' });
      expect(store.getActions()).toEqual([
        {
          data: { message: UPDATE_PROFILE_SUCCESS },
          type: SEND_NOTIFICATION
        }
      ]);
    });

    it('throws an error when service says that the data was invalid', async () => {
      registerUniqueProfileNameMock.mockReturnValue(
        Promise.reject({ code: 'invalid-argument', message: 'bad data' })
      );

      try {
        await store.dispatch(setProfileName({ profileName: 'some-name' }));
        fail('should have thrown an error by now');
      } catch(error) {
        expect(error.name).toEqual('SubmissionError');
      }
    });

    it('throws an error when the profile name already exists', async () => {
      registerUniqueProfileNameMock.mockReturnValue(
        Promise.reject({ code: 'already-exists', message: 'already exists'})
      );

      try {
        await store.dispatch(setProfileName({ profileName: 'some-name' }));
        fail('should have thrown an error by now');
      } catch(error) {
        expect(error.name).toEqual('SubmissionError');
      }
    });
  });
});
