import { selectIsLoggedIn } from './selectors';

describe('isLoggedIn selecter', () => {

  const withParentState = auth => ({ firebase: auth });

  it('returns true when the auth is set', () => {
    const result = selectIsLoggedIn(
      withParentState({ auth: { uid: '123' }})
    );
    expect(result).toBeTruthy();
  });

  it('returns false when the auth is not set', () => {
    const result = selectIsLoggedIn(
      withParentState({ auth: undefined })
    );
    expect(result).toBeFalsy();
  });
})
