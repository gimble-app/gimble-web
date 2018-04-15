import auth, { selectIsLoggedIn } from './reducers';
import { loginSuccess, logoutSuccess } from './actions';

describe('auth reducer', () => {
  const loginSuccessAction = loginSuccess({ uid: 'id' });

  it('provides an empty object by default', () => {
    const result = auth(undefined, {});
    expect(result).toEqual({});
  });

  describe('loginSuccess', () => {
    it('sets the user details', () => {
      const result = auth(undefined, loginSuccessAction);

      expect(result.uid).toEqual('id');
    });
  });

  describe('logoutSuccess', () => {
    const logoutSuccessAction = logoutSuccess();

    it('removes an entry when it exists', () => {
      const result = auth({ uid: '001' }, logoutSuccessAction);
      expect(result).toEqual({});
    });
  });
});

describe('isLoggedIn selecter', () => {
  it('returns true when the auth is set', () => {
    const result = selectIsLoggedIn({ auth: { uid: '123' }});
    expect(result).toBeTruthy();
  });

  it('returns false when the auth is not set', () => {
    const result = selectIsLoggedIn({ auth: {} });
    expect(result).toBeFalsy();
  });
})
